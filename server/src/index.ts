import "reflect-metadata";

import { createConnection } from "typeorm";
import {buildSchema} from "type-graphql";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import {HarmonizedSystemCodeResolver} from "./models/HarmonizedSystemCode";
import {CatalogItemResolver} from "./models/CatalogItem";
import {BusinessResolver} from "./models/Business";


const PORT = 4002
const GRAPHQL_ENDPOINT = "/graphql"


async function main() {
    await createConnection()
    const app = express();

    const schema = await buildSchema({
        resolvers: [
            HarmonizedSystemCodeResolver,
            CatalogItemResolver,
            BusinessResolver
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