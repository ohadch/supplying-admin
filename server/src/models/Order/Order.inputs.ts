import {Field, InputType} from "type-graphql";
import {OrderStatus} from "shared/@types/enums";
import {Order} from "./Order.model";

@InputType()
export class CreateOrderInput implements Partial<Order>{
    @Field(type => String)
    offerRoundId: string;
}

@InputType()
export class UpdateOrderInput implements Partial<Order>{
    @Field(type => String)
    status: OrderStatus;
}