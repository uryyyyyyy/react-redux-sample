import * as React from "react";
import {CounterState, DispatchActions} from "./Models";

interface Props {
    state: CounterState;
    actions: DispatchActions;
}

export default class Counter extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                <p>score: {this.props.state.num}</p>
                <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
                <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
                <button onClick={() => this.props.actions.fetchAmount()}>async bonus 100</button>
            </div>
        )
    }
}