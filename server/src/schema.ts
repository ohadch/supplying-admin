import 'graphql-import-node';
import {GraphQLSchema} from "graphql";
import { makeExecutableSchema, ITypeDefinitions } from "graphql-tools";
import * as typeDefs from "./schema/schema.graphql";
import resolvers from "./resolvers";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: typeDefs as unknown as ITypeDefinitions,
    resolvers
})

export default schema;