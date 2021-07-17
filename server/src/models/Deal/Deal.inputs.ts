import {Field, InputType} from "type-graphql";
import {Deal} from "./Deal.model";

@InputType()
export class CreateDealInput implements Partial<Deal>{
    @Field(type => String)
    name: string;

    @Field(type => String)
    ownerId: string;

    @Field(type => String)
    supplierId: string;
}

@InputType()
export class UpdateDealInput implements Partial<Deal>{
    @Field(type => String)
    name: string;
}