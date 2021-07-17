import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, Float, ID, Int, ObjectType} from "type-graphql";
import {Product} from "../Product";
import {Catalog} from "../Catalog";

export const CATALOG_ITEM_RELATIONS = [
    "product",
    "catalog"
]

@Entity()
@ObjectType()
export class CatalogItem extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => Int)
    @Column()
    quantity: number;

    @Field(type => Float, { nullable: true })
    @Column({ nullable: true })
    discountPercent: number;

    @Field(type => Float)
    @Column()
    pricePerUnitOffered: number;

    @Field(type => Float, { nullable: true })
    @Column({ nullable: true })
    pricePerUnitAgreed: number;

    @Field(type => String)
    @Column()
    productId: string;

    @Field(type => String)
    @Column()
    catalogId: string;

    @Field(type => Product)
    @ManyToOne(() => Product)
    @JoinColumn({ name: "productId" })
    product: Product;

    @Field(type => Catalog)
    @ManyToOne(() => Catalog)
    @JoinColumn({ name: "catalogId" })
    catalog: Catalog;


}