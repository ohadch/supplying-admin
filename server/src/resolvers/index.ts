import { IResolvers } from "graphql-tools";
import {ILink} from "./@types/models";

const index: IResolvers = {
    Query: {
        helloWorld: () => "Hello world from Ohad's Apollo server"
    },
    Mutation: {
        post(url: string, description: string) : ILink {
            return {
                id: "id",
                description,
                url,
            }
        }
    }
}

export default index;