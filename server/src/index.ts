import "reflect-metadata";

import { createConnection } from "typeorm";
import {buildSchema} from "type-graphql";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import {HarmonizedSystemCodeResolver} from "./models/HarmonizedSystemCode";
import {ProductResolver} from "./models/Product";
import {BusinessResolver} from "./models/Business";
import {OfferRoundResolver} from "./models/OfferRound";
import {OfferResolver} from "./models/Offer";
import {OrderResolver} from "./models/Order";
import {CatalogItemResolver} from "./models/CatalogItem";


const PORT = 4002
const GRAPHQL_ENDPOINT = "/graphql"


async function main() {
    await createConnection()
    const app = express();

    const schema = await buildSchema({
        resolvers: [
            HarmonizedSystemCodeResolver,
            ProductResolver,
            BusinessResolver,
            OfferRoundResolver,
            OfferResolver,
            OrderResolver,
            CatalogItemResolver
        ]
    })

    const server = new ApolloServer({
        schema,
        playground: true
    })

    app.use(cors())
    app.get("/", (req, res) => {
        res.send("MGC Action Manager")
    })

    server.applyMiddleware({app, path: GRAPHQL_ENDPOINT})

    app.listen({port: PORT}, () => console.log(`🚀 Apollo server is listening on http://localhost:${PORT}${GRAPHQL_ENDPOINT}`))
}

main().then();