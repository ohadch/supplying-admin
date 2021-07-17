import React from "react";
import {FC} from "react";

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {ITodo} from "../../@types/models";
import { Todo } from "./Todo";

interface IQueryResult {
    todos: ITodo[]
}


export const TodoList : FC<any> = () => {
    return (
        <Query<IQueryResult> query={GET_TODOS}>
            {({ data, loading, error }) => {
                if (!data || !data.todos) {
                    return <p>No todos yet</p>;
                }
                if (error) {
                    return <div>{error.toString()}</div>;
                }
                if (loading) {
                    return <div>Loading ...</div>;
                }
                return (
                    <table>
                        <thead>
                        <tr>
                            <td>Done?</td>
                            <td>Title</td>
                            <td>Description</td>
                        </tr>
                        </thead>
                        <tbody>
                        {data.todos.map(todo => <Todo todo={todo} key={todo.id} />)}
                        </tbody>
                    </table>
                );
            }}
        </Query>
    )
}