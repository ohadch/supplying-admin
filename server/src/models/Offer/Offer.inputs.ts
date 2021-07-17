import {Field, InputType} from "type-graphql";
import {Offer} from "./Offer.model";
import {Column} from "typeorm";

@InputType()
export class CreateOfferInput implements Partial<Offer>{
    @Field(type => String)
    @Column()
    name: string;

    @Field(type => String)
    @Column()
    originatorId: string;

    @Field(type => String)
    @Column()
    offereeId: string;
}

@InputType()
export class UpdateOfferInput implements Partial<Offer>{
    @Field({ nullable: true })
    name: string;
}