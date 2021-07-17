import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, Int, ObjectType} from "type-graphql";

@Entity()
@ObjectType()
export class HarmonizedSystemCode extends BaseEntity {
    @Field(
        type => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => String)
    @Column()
    name: string;

    @Field(type => String)
    @Column({ unique: true })
    code: string;
}