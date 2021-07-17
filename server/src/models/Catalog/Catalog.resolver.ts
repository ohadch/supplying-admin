import {Resolver, Query, Arg, Mutation} from "type-graphql";
import {Catalog, CATALOG_RELATIONS} from "./Catalog.model";

@Resolver()
export class CatalogResolver {
    @Query(() => Catalog)
    async catalog(@Arg("id") id: string) {
        const catalog = await Catalog.findOne(id, {
            relations: CATALOG_RELATIONS
        });
        if (!catalog) throw new Error("Catalog not found!");
        return catalog
    }

    @Mutation(() => Boolean)
    async deleteCatalog(@Arg("id") id: string) {
        const catalog = await Catalog.findOne(id);
        if (!catalog) throw new Error("Catalog not found!");
        await catalog.remove();
        return true;
    }

}