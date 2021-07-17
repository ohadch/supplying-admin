import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {DEAL_RELATIONS, Deal} from "./Deal.model";
import {CreateDealInput, UpdateDealInput} from "./Deal.inputs";

@Resolver()
export class DealResolver {
    @Query(() => [Deal])
    async deals() {
        return Deal.find({
            relations: DEAL_RELATIONS
        });
    }

    @Mutation(() => Deal)
    async createDeal(@Arg("data") data: CreateDealInput) {
        const deal = Deal.create(data);
        await deal.save();
        return Deal.findOne(deal.id, {
            relations: DEAL_RELATIONS
        });
    }

    @Mutation(() => Deal)
    async updateDeal(@Arg("id") id: string, @Arg("data") data: UpdateDealInput) {
        const deal = await Deal.findOne(id);
        if (!deal) throw new Error("Deal not found");
        Object.assign(deal, data);
        await deal.save();
        return Deal.findOne(deal.id, {
            relations: DEAL_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteDeal(@Arg("id") id: string) {
        const deal = await Deal.findOne(id);
        if (!deal) throw new Error("Deal not found");
        await deal.remove();
        return true;
    }

}