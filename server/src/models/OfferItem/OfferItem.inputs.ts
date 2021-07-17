import {Field, Float, InputType, Int} from "type-graphql";
import {OfferItem} from "./OfferItem.model";

@InputType()
export class CreateOfferItemInput implements Partial<OfferItem>{
    @Field(type => Float)
    pricePerUnitOffered: number;

    @Field(type => Float, { nullable: true })
    pricePerUnitAgreed: number;

    @Field(type => String)
    productId: string;

    @Field(type => String)
    offerRoundId: string;

    @Field(type => Int)
    quantity: number;

    @Field(type => Float, { nullable: true })
    discountPercent: number;
}

@InputType()
export class UpdateOfferItemInput implements Partial<OfferItem>{
    @Field(type => Float, { nullable: true })
    pricePerUnitAgreed: number;

    @Field(type => Int, { nullable: true })
    quantity: number;

    @Field(type => Float, { nullable: true })
    discountPercent: number;
}