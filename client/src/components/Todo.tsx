import React from "react";
import {FC} from "react";
import {ITodo} from "../../@types/models";

interface IProps {
    todo: ITodo
}


export const Todo : FC<IProps> = (props) => {
    const { todo } = props;

    return (
        <tr>
            <td>{todo.isDone ?  "V" : "X"}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
        </tr>
    )
}