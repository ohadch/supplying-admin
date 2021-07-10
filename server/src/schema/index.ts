import {buildSchema} from "type-graphql";
import {TodoResolver} from "../resolvers/todoResolver";

export const getSchema = () => buildSchema({
    resolvers: [TodoResolver],
    emitSchemaFile: true
})