import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";
import {OfferRoundStatus} from "shared/@types/enums";
import {Offer} from "../Offer/Offer.model";
import {CatalogItem} from "../CatalogItem";
import {Catalog} from "../Catalog";

export const OFFER_ROUND_RELATIONS = [
    "offer"
]

@Entity()
@ObjectType()
export class OfferRound extends BaseEntity {
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
    offerId: string;

    @Field(type => String)
    @Column()
    catalogId: string;

    @Field(type => String)
    @Column({
        type: "enum",
        enum: OfferRoundStatus,
    })
    status: OfferRoundStatus;

    @Field(type => Offer)
    @ManyToOne(() => Offer)
    @JoinColumn({ name: "offerId" })
    offer: Offer;

    @Field(type => Catalog)
    @ManyToOne(() => Catalog)
    @JoinColumn({ name: "catalogId" })
    catalog: Catalog;

}