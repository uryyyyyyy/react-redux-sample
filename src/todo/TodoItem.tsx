import * as React from "react";
import {Todo, DispatchActions} from "./Models";

export interface Props {
    item: Todo;
    key?: number; // I think this prop is unnecessary, but unless it an error occurs in tsc.
    actions: DispatchActions;
}

export default class TodoItem extends React.Component<Props, {}> {
    constructor () {
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem () {
        this.props.actions.deleteTodo(this.props.item.id);
    }

    render () {
        return (
            <li>
                <span> {this.props.item.text} </span>
                <button
                    className="myButton"
                    onClick={this.removeItem}
                >delete</button>
            </li>
        );
    }
}