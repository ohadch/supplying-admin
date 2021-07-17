import {Field, InputType} from "type-graphql";
import {Business} from "./Business.model";
import {BusinessType} from "shared/@types/enums";

@InputType()
export class CreateBusinessInput implements Partial<Business>{
    @Field()
    name: string;

    @Field()
    type: BusinessType;
}

@InputType()
export class UpdateBusinessInput implements Partial<Business>{
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    type: BusinessType;
}