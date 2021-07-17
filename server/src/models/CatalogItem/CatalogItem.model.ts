import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";
import {HarmonizedSystemCode} from "../HarmonizedSystemCode";

export const CATALOG_ITEM_RELATIONS = [
    "harmonizedSystemCode"
]

@Entity()
@ObjectType()
export class CatalogItem extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => String)
    @Column()
    name: string;

    @Field(type => Int)
    @Column()
    harmonizedSystemCodeId: string;


    @ManyToOne(() => HarmonizedSystemCode)
    @JoinColumn({ name: "harmonizedSystemCodeId" })
    harmonizedSystemCode: HarmonizedSystemCode;

}