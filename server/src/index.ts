import "reflect-metadata";

import express from "express";
import {ApolloServer} from "apollo-server-express";
import cors from "cors";
import {getSchema} from "./schema";

const PORT = 8000
const GRAPHQL_ENDPOINT = "/graphql"

async function main() {
    const app = express();
    const schema = await getSchema();

    const server = new ApolloServer({
        schema,
        playground: true
    })

    app.use(cors())
    app.get("/", (req, res) => {
        res.send("hello world")
    })

    server.applyMiddleware({app, path: GRAPHQL_ENDPOINT})

    app.listen({port: PORT}, () => console.log(`🚀 Apollo server is listening on http://localhost:${PORT}${GRAPHQL_ENDPOINT}`))
}

main().then();