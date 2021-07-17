import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {BUSINESS_RELATIONS, Business} from "./Business.model";
import {CreateBusinessInput, UpdateBusinessInput} from "./Business.inputs";

@Resolver()
export class BusinessResolver {
    @Query(() => [Business])
    async businesses() {
        return Business.find({
            relations: BUSINESS_RELATIONS
        });
    }

    @Mutation(() => Business)
    async createBusiness(@Arg("data") data: CreateBusinessInput) {
        const business = Business.create(data);
        await business.save();
        return Business.findOne(business.id, {
            relations: BUSINESS_RELATIONS
        });
    }

    @Mutation(() => Business)
    async updateBusiness(@Arg("id") id: number, @Arg("data") data: UpdateBusinessInput) {
        const business = await Business.findOne(id);
        if (!business) throw new Error("Glider not found");
        Object.assign(business, data);
        await business.save();
        return Business.findOne(business.id, {
            relations: BUSINESS_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteBusiness(@Arg("id") id: number) {
        const business = await Business.findOne(id);
        if (!business) throw new Error("Glider not found!");
        await business.remove();
        return true;
    }

}