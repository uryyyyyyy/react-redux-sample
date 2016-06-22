import * as React from "react";
import store from "./Store";
import * as Types from "./ActionTypes";
import {GlobalState, MyAction} from "./Models";

interface Props {
    value: GlobalState;
}

export default class Counter extends React.Component<Props, {}> {

    render() {
        const increment: MyAction = { type: Types.INCREMENT, amount: 3};
        const decrement: MyAction = { type: Types.DECREMENT, amount: 2};
        return (
            <div>
                <p>Clicked: {this.props.value.num} times</p>
                <button onClick={() => {
                store.dispatch(increment)
                console.log("inc done")
                }}>Increment 3</button>
                <button onClick={() => store.dispatch(decrement)}>Decrement 2</button>
            </div>
        )
    }
}