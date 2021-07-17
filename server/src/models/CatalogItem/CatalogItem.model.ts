import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, Float, ID, Int, ObjectType} from "type-graphql";
import {OfferRound} from "../OfferRound";
import {Product} from "../Product";

export const CATALOG_ITEM_RELATIONS = [
    "product"
]

@Entity()
@ObjectType()
export class CatalogItem extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => Float)
    @Column()
    priceOfferedByTheOriginator: number;

    @Field(type => Float, { nullable: true })
    @Column({ nullable: true })
    priceAgreedByTheOfferee: number;

    @Field(type => String)
    @Column()
    productId: string;

    @ManyToOne(() => OfferRound)
    @JoinColumn({ name: "productId" })
    product: Product;

}