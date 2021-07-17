import {Field, InputType} from "type-graphql";
import {CatalogItem} from "./CatalogItem.model";

@InputType()
export class CreateCatalogItemInput implements Partial<CatalogItem>{
    @Field()
    name: string;

    @Field()
    harmonizedSystemCodeId: string;

}

@InputType()
export class UpdateCatalogItemInput implements Partial<CatalogItem>{
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    harmonizedSystemCodeId: string;
}