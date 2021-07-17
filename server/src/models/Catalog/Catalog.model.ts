import {BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field, Float, ID, Int, ObjectType} from "type-graphql";
import {CatalogItem} from "../CatalogItem";

export const CATALOG_RELATIONS = [
    "items"
]

@Entity()
@ObjectType()
export class Catalog extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => [CatalogItem])
    @OneToMany(() => CatalogItem, catalogItem => catalogItem.catalog)
    items: CatalogItem[];
}