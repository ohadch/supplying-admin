import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {PRODUCT_RELATIONS, Product} from "./Product.model";
import {CreateProductInput, UpdateProductInput} from "./Product.inputs";

@Resolver()
export class ProductResolver {
    @Query(() => [Product])
    async products() {
        return Product.find({
            relations: PRODUCT_RELATIONS
        });
    }

    @Mutation(() => Product)
    async createProduct(@Arg("data") data: CreateProductInput) {
        const product = Product.create(data);
        await product.save();
        return Product.findOne(product.id, {
            relations: PRODUCT_RELATIONS
        });
    }

    @Mutation(() => Product)
    async updateProduct(@Arg("id") id: string, @Arg("data") data: UpdateProductInput) {
        const product = await Product.findOne(id);
        if (!product) throw new Error("Product not found");
        Object.assign(product, data);
        await product.save();
        return Product.findOne(product.id, {
            relations: PRODUCT_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg("id") id: string) {
        const product = await Product.findOne(id);
        if (!product) throw new Error("Product not found!");
        await product.remove();
        return true;
    }

}