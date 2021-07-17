import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {ORDER_RELATIONS, Order} from "./Order.model";
import {CreateOrderInput, UpdateOrderInput} from "./Order.inputs";

@Resolver()
export class OrderResolver {
    @Query(() => [Order])
    async orders() {
        return Order.find({
            relations: ORDER_RELATIONS
        });
    }

    @Mutation(() => Order)
    async createOrder(@Arg("data") data: CreateOrderInput) {
        const order = Order.create(data);
        await order.save();
        return Order.findOne(order.id, {
            relations: ORDER_RELATIONS
        });
    }

    @Mutation(() => Order)
    async updateOrder(@Arg("id") id: string, @Arg("data") data: UpdateOrderInput) {
        const order = await Order.findOne(id);
        if (!order) throw new Error("Order not found");
        Object.assign(order, data);
        await order.save();
        return Order.findOne(order.id, {
            relations: ORDER_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteOrder(@Arg("id") id: string) {
        const order = await Order.findOne(id);
        if (!order) throw new Error("Order not found!");
        await order.remove();
        return true;
    }

}