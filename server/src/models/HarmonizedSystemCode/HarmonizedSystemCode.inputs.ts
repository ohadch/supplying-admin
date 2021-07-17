import {Field, InputType} from "type-graphql";
import {HarmonizedSystemCode} from "./HarmonizedSystemCode.model";

@InputType()
export class CreateHarmonizedSystemCodeInput implements Partial<HarmonizedSystemCode>{
    @Field()
    name: string;

    @Field()
    code: string;

}

@InputType()
export class UpdateHarmonizedSystemCodeInput implements Partial<HarmonizedSystemCode>{
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    code: string;
}