import * as React from "react";
import {DispatchActions, TodoState, Todo} from "./Models";
import Footer from "./Footer"
import TodoItem from "./TodoItem"
import {List} from "immutable";

interface Props {
    todos: List<Todo>;
    actions: DispatchActions;
}

export default class TodoList extends React.Component<Props, {}> {

    render() {
        const todoItems = this.props.todos.map((item:Todo) => (
            <TodoItem key={item.id} item={item} actions={this.props.actions} />
        ));
        return (
            <div>
                {todoItems}
                <Footer actions={this.props.actions} />
            </div>
        )
    }
}