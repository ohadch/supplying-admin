import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {OFFER_ROUND_RELATIONS, OfferRound} from "./OfferRound.model";
import {CreateOfferRoundInput, UpdateOfferRoundInput} from "./OfferRound.inputs";

@Resolver()
export class OfferRoundResolver {
    @Query(() => [OfferRound])
    async offerRounds() {
        return OfferRound.find({
            relations: OFFER_ROUND_RELATIONS
        });
    }

    @Mutation(() => OfferRound)
    async createOfferRound(@Arg("data") data: CreateOfferRoundInput) {
        const offerRound = OfferRound.create(data);
        await offerRound.save();
        return OfferRound.findOne(offerRound.id, {
            relations: OFFER_ROUND_RELATIONS
        });
    }

    @Mutation(() => OfferRound)
    async updateOfferRound(@Arg("id") id: number, @Arg("data") data: UpdateOfferRoundInput) {
        const offerRound = await OfferRound.findOne(id);
        if (!offerRound) throw new Error("Glider not found");
        Object.assign(offerRound, data);
        await offerRound.save();
        return OfferRound.findOne(offerRound.id, {
            relations: OFFER_ROUND_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteOfferRound(@Arg("id") id: number) {
        const offerRound = await OfferRound.findOne(id);
        if (!offerRound) throw new Error("Glider not found!");
        await offerRound.remove();
        return true;
    }

}