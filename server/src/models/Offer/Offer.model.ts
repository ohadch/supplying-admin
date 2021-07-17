import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";
import {OfferRound} from "../OfferRound";
import {Business} from "../Business";

export const OFFER_RELATIONS = [
    "rounds"
]

@Entity()
@ObjectType()
export class Offer extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => Date)
    @Column()
    createdAt: Date;

    @Field(type => String)
    @Column()
    name: string;

    @Field(type => String)
    @Column()
    originatorId: string;

    @Field(type => String)
    @Column()
    offereeId: string;

    @Field(type => [OfferRound])
    @OneToMany(() => OfferRound, offerRound => offerRound.offer)
    rounds: OfferRound[];

    @Field(type => Business)
    @ManyToOne(() => Business)
    @JoinColumn({ name: "originatorId" })
    originator: Business;

    @Field(type => Business)
    @ManyToOne(() => Business)
    @JoinColumn({ name: "offereeId" })
    offeree: Business;
}