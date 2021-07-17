import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {OFFER_RELATIONS, Offer} from "./Offer.model";
import {CreateOfferInput, UpdateOfferInput} from "./Offer.inputs";

@Resolver()
export class OfferResolver {
    @Query(() => [Offer])
    async offers() {
        return Offer.find({
            relations: OFFER_RELATIONS
        });
    }

    @Mutation(() => Offer)
    async createOffer(@Arg("data") data: CreateOfferInput) {
        const offer = Offer.create(data);
        await offer.save();
        return Offer.findOne(offer.id, {
            relations: OFFER_RELATIONS
        });
    }

    @Mutation(() => Offer)
    async updateOffer(@Arg("id") id: number, @Arg("data") data: UpdateOfferInput) {
        const offer = await Offer.findOne(id);
        if (!offer) throw new Error("Offer not found");
        Object.assign(offer, data);
        await offer.save();
        return Offer.findOne(offer.id, {
            relations: OFFER_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteOffer(@Arg("id") id: number) {
        const offer = await Offer.findOne(id);
        if (!offer) throw new Error("Offer not found");
        await offer.remove();
        return true;
    }

}