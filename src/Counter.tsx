import * as React from "react";
import * as Types from "./ActionTypes";
import {GlobalState, MyAction} from "./Models";
import {middleHook} from "./Middle";

interface Props {
    value: GlobalState;
    dispatch: (action:any) => any;
}

export default class Counter extends React.Component<Props, {}> {

    render() {
        const increment: MyAction = { type: Types.INCREMENT, amount: 3};
        const decrement: MyAction = { type: Types.DECREMENT, amount: 2};
        return (
            <div>
                <p>Clicked: {this.props.value.num} times</p>
                <button onClick={() => this.props.dispatch(increment)}>Increment 3</button>
                <button onClick={() => this.props.dispatch(decrement)}>Decrement 2</button>
                <button onClick={() => this.props.dispatch(middleHook(1000))}>async bonus 100</button>
            </div>
        )
    }
}