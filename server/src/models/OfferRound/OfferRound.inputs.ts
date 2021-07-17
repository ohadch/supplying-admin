import {Field, InputType, Int} from "type-graphql";
import {OfferRound} from "./OfferRound.model";
import {OfferRoundStatus} from "shared/@types/enums";

@InputType()
export class CreateOfferRoundInput implements Partial<OfferRound>{
    @Field(type => String)
    name: string;

    @Field(type => Int)
    offerId: string;
}

@InputType()
export class UpdateOfferRoundInput implements Partial<OfferRound>{
    @Field(type => String, { nullable: true })
    name: string;

    @Field(type => String, { nullable: true })
    status: OfferRoundStatus;
}