import { IResolvers } from "graphql-tools";

const resolvers: IResolvers = {
    Query: {
        helloWorld: () => "Hello world from Ohad's Apollo server"
    }
}

export default resolvers;