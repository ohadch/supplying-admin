import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";
import {HarmonizedSystemCode} from "../HarmonizedSystemCode";

export const PRODUCT_RELATIONS = [
    "harmonizedSystemCode"
]

@Entity()
@ObjectType()
export class Product extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => String)
    @Column()
    name: string;

    @Field(type => String)
    @Column()
    harmonizedSystemCodeId: string;

    @Field(type => HarmonizedSystemCode)
    @ManyToOne(() => HarmonizedSystemCode)
    @JoinColumn({ name: "harmonizedSystemCodeId" })
    harmonizedSystemCode: HarmonizedSystemCode;

}