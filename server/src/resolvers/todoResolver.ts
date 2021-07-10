import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Todo, TodoInput} from "../schema/Todo";
import { v4 } from "uuid"

@Resolver(of => Todo)
export class TodoResolver {

    private todos: Todo[] = [];

    @Query(returns => [Todo], { nullable: true })
    async getTodos() {
        return this.todos;
    }

    @Mutation(returns => [Todo])
    async addTodo(
        @Arg("todoInput") { title, description } : TodoInput
    ) {
        const todo : Todo = {
            id: v4().toString(),
            title,
            description,
            isDone: false
        }

        this.todos.push(todo)

        return this.todos;
    }

}