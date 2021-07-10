import express from "express";
import {ApolloServer} from "apollo-server-express";
import schema from "./schema";
import cors from "cors";

const PORT = 8000
const GRAPHQL_ENDPOINT = "/graphql"

const app = express();
const index = new ApolloServer({
    schema,
    playground: true
})

app.use(cors())
app.get("/", (req, res) => {
    res.send("hello world")
})

index.applyMiddleware({app, path: GRAPHQL_ENDPOINT})

app.listen({port: PORT}, () => console.log(`🚀 Apollo server is listening on http://localhost:${PORT}${GRAPHQL_ENDPOINT}`))