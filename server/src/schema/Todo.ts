import {Field, ID, InputType, ObjectType} from "type-graphql";

@ObjectType()
export class Todo {
    @Field(type => ID)
    id: string

    @Field()
    title: string

    @Field()
    description: string

    @Field()
    isDone: boolean
}

@InputType()
export class TodoInput implements Partial<Todo> {
    @Field()
    title: string

    @Field()
    description: string

}