import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";
import {Business} from "../Business";
import {Catalog} from "../Catalog";

export const DEAL_RELATIONS = [
    "items"
]

@Entity()
@ObjectType()
export class Deal extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => String)
    @Column()
    name: string;

    @Field(type => String)
    @Column()
    ownerId: string;

    @Field(type => String)
    @Column()
    supplierId: string;

    @Field(type => String)
    @Column()
    catalogId: string

    @Field(type => Business)
    @ManyToOne(() => Business)
    @JoinColumn({ name: "ownerId" })
    owner: Business;

    @Field(type => Business)
    @ManyToOne(() => Business)
    @JoinColumn({ name: "supplierId" })
    supplier: Business;

    @Field(type => Catalog)
    @ManyToOne(() => Catalog)
    @JoinColumn({ name: "catalogId" })
    catalog: Catalog;
}