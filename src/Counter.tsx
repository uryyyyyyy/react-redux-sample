import * as React from "react";
import {GlobalState, DispatchActions} from "./Models";

interface Props {
    value: GlobalState;
    actions: DispatchActions;
}

export default class Counter extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                <p>Clicked: {this.props.value.num} times</p>
                <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
                <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
                <button onClick={() => this.props.actions.async(1000)}>async bonus 100</button>
            </div>
        )
    }
}