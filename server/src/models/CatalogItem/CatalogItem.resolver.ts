import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {CATALOG_ITEM_RELATIONS, CatalogItem} from "./CatalogItem.model";
import {CreateCatalogItemInput, UpdateCatalogItemInput} from "./CatalogItem.inputs";

@Resolver()
export class CatalogItemResolver {
    @Query(() => [CatalogItem])
    async catalogItems() {
        return CatalogItem.find({
            relations: CATALOG_ITEM_RELATIONS
        });
    }

    @Mutation(() => CatalogItem)
    async createCatalogItem(@Arg("data") data: CreateCatalogItemInput) {
        const catalogItem = CatalogItem.create(data);
        await catalogItem.save();
        return CatalogItem.findOne(catalogItem.id, {
            relations: CATALOG_ITEM_RELATIONS
        });
    }

    @Mutation(() => CatalogItem)
    async updateCatalogItem(@Arg("id") id: number, @Arg("data") data: UpdateCatalogItemInput) {
        const catalogItem = await CatalogItem.findOne(id);
        if (!catalogItem) throw new Error("Glider not found");
        Object.assign(catalogItem, data);
        await catalogItem.save();
        return CatalogItem.findOne(catalogItem.id, {
            relations: CATALOG_ITEM_RELATIONS
        });
    }

    @Mutation(() => Boolean)
    async deleteCatalogItem(@Arg("id") id: number) {
        const catalogItem = await CatalogItem.findOne(id);
        if (!catalogItem) throw new Error("Glider not found!");
        await catalogItem.remove();
        return true;
    }

}