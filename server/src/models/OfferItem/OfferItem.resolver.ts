import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {OFFER_ITEM_RELATIONS, OfferItem} from "./OfferItem.model";
import {CreateOfferItemInput, UpdateOfferItemInput} from "./OfferItem.inputs";

@Resolver()
export class OfferItemResolver {
    @Query(() => [OfferItem])
    async offerItems() {
        return OfferItem.find({
            relations: OFFER_ITEM_RELATIONS
        });
    }

    @Mutation(() => OfferItem)
    async createOfferItem(@Arg("data") data: CreateOfferItemInput) {
        const offerItem = OfferItem.create(data);
        await offerItem.save();
        return OfferItem.findOne(offerItem.id, {
            relations: OFFER_ITEM_RELATIONS
        });
    }

    @Mutation(() => OfferItem)
    async updateOfferItem(@Arg("id") id: string, @Arg("data") data: UpdateOfferItemInput) {
        const offerItem = await OfferItem.findOne(id);
        if (!offerItem) throw new Error("OfferItem not found");
        Object.assign(offerItem, data);
        await offerItem.save();
        return OfferItem.findOne(offerItem.id, {
            relations: OFFER_ITEM_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteOfferItem(@Arg("id") id: string) {
        const offerItem = await OfferItem.findOne(id);
        if (!offerItem) throw new Error("OfferItem not found!");
        await offerItem.remove();
        return true;
    }

}