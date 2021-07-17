import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";
import {OfferRound} from "../OfferRound";
import {OrderStatus} from "shared/@types/enums";

export const ORDER_RELATIONS = [
    "offerRound"
]

@Entity()
@ObjectType()
export class Order extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => Date)
    @Column()
    createdAt: Date;

    @Field(type => String)
    @Column()
    offerRoundId: string;

    @Field(type => String)
    @Column({
        type: "enum",
        enum: OrderStatus,
    })
    status: OrderStatus;

    @Field(type => OfferRound)
    @ManyToOne(() => OfferRound)
    @JoinColumn({ name: "offerRoundId" })
    offerRound: OfferRound;

}