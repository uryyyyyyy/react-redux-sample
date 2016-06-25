import * as React from "react";
import {DispatchActions, Todo} from "./Models";
import Footer from "./Footer";
import TodoItem from "./TodoItem";
import {List} from "immutable";

interface Props {
    todos: List<Todo>;
    actions: DispatchActions;
}

export default class TodoList extends React.Component<Props, {}> {
    
    componentDidMount() {
        //if todos are already taken, don't action anymore.
        if(!this.props.todos.isEmpty()) return;
        this.props.actions.fetchAll()
    }

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