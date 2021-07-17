import gql from "graphql-tag";

const GET_ALL_TODOS = gql`
    {
        todos: getTodos {
            id,
            title,
            description,
            isDone
        }
    }
`;