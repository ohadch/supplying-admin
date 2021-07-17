import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, Float, ID, Int, ObjectType} from "type-graphql";
import {OfferRound} from "../OfferRound";
import {Product} from "../Product";

export const OFFER_ITEM_RELATIONS = [
    "product"
]

@Entity()
@ObjectType()
export class OfferItem extends BaseEntity {
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
    offerRoundId: string;

    @ManyToOne(() => OfferRound)
    @JoinColumn({ name: "productId" })
    product: Product;

    @ManyToOne(() => OfferRound)
    @JoinColumn({ name: "offerRoundId" })
    offerRound: OfferRound;


}