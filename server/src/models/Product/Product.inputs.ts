import {Field, InputType} from "type-graphql";
import {Product} from "./Product.model";

@InputType()
export class CreateProductInput implements Partial<Product>{
    @Field()
    name: string;

    @Field()
    harmonizedSystemCodeId: string;

}

@InputType()
export class UpdateProductInput implements Partial<Product>{
    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    harmonizedSystemCodeId: string;
}