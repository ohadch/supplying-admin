import {Field, Float, InputType} from "type-graphql";
import {CatalogItem} from "./CatalogItem.model";

@InputType()
export class CreateCatalogItemInput implements Partial<CatalogItem>{
    @Field(type => Float)
    priceOfferedByTheOriginator: number;

    @Field(type => Float, { nullable: true })
    priceAgreedByTheOfferee: number;

    @Field(type => String)
    productId: string;
}

@InputType()
export class UpdateCatalogItemInput implements Partial<CatalogItem>{
    @Field(type => Float)
    priceAgreedByTheOfferee: number;
}