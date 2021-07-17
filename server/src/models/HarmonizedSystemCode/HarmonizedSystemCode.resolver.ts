import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {HarmonizedSystemCode} from "./HarmonizedSystemCode.model";
import {CreateHarmonizedSystemCodeInput, UpdateHarmonizedSystemCodeInput} from "./HarmonizedSystemCode.inputs";

@Resolver()
export class HarmonizedSystemCodeResolver {
    @Query(() => [HarmonizedSystemCode])
    async harmonizedSystemCodes() {
        return HarmonizedSystemCode.find();
    }

    @Mutation(() => HarmonizedSystemCode)
    async createHarmonizedSystemCode(@Arg("data") data: CreateHarmonizedSystemCodeInput) {
        const harmonizedSystemCode = HarmonizedSystemCode.create(data);
        await harmonizedSystemCode.save();
        return harmonizedSystemCode;
    }

    @Mutation(() => HarmonizedSystemCode)
    async updateHarmonizedSystemCode(@Arg("id") id: string, @Arg("data") data: UpdateHarmonizedSystemCodeInput) {
        const harmonizedSystemCode = await HarmonizedSystemCode.findOne(id);
        if (!harmonizedSystemCode) throw new Error("Glider not found");
        Object.assign(harmonizedSystemCode, data);
        await harmonizedSystemCode.save();
        return harmonizedSystemCode
    }

    @Mutation(() => Boolean)
    async deleteHarmonizedSystemCode(@Arg("id") id: string) {
        const harmonizedSystemCode = await HarmonizedSystemCode.findOne(id);
        if (!harmonizedSystemCode) throw new Error("Glider not found!");
        await harmonizedSystemCode.remove();
        return true;
    }

}