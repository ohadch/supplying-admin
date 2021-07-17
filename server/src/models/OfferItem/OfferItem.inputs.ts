import {Field, Float, InputType} from "type-graphql";
import {OfferItem} from "./OfferItem.model";

@InputType()
export class CreateOfferItemInput implements Partial<OfferItem>{
    @Field(type => Float)
    priceOfferedByTheOriginator: number;

    @Field(type => Float, { nullable: true })
    priceAgreedByTheOfferee: number;

    @Field(type => String)
    productId: string;
}

@InputType()
export class UpdateOfferItemInput implements Partial<OfferItem>{
    @Field(type => Float)
    priceAgreedByTheOfferee: number;
}