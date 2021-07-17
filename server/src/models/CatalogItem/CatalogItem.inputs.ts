import {Field, Float, InputType, Int} from "type-graphql";
import {CatalogItem} from "./CatalogItem.model";

@InputType()
export class CreateCatalogItemInput implements Partial<CatalogItem>{
    @Field(type => Float)
    pricePerUnitOffered: number;

    @Field(type => Float, { nullable: true })
    pricePerUnitAgreed: number;

    @Field(type => String)
    productId: string;

    @Field(type => String)
    catalogId: string;

    @Field(type => Int)
    quantity: number;

    @Field(type => Float, { nullable: true })
    discountPercent: number;
}

@InputType()
export class UpdateCatalogItemInput implements Partial<CatalogItem>{
    @Field(type => Float, { nullable: true })
    pricePerUnitAgreed: number;

    @Field(type => Int, { nullable: true })
    quantity: number;

    @Field(type => Float, { nullable: true })
    discountPercent: number;
}