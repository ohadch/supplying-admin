import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";
import {BusinessType} from "shared/@types/enums";

export const BUSINESS_RELATIONS = [
]

@Entity()
@ObjectType()
export class Business extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => String)
    @Column()
    name: string;

    @Field(type => String)
    @Column({
        type: "enum",
        enum: BusinessType
    })
    type: BusinessType;
}