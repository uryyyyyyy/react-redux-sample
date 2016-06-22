import * as React from "react";
import store from "./Store";
import * as Types from "./ActionTypes";
import {GlobalState, MyAction} from "./Models";
import * as Promise from "bluebird"

interface Props {
    value: GlobalState;
}

function async(time: number) {
    const promise:Promise<{}> = new Promise(function(resolve, reject) {setTimeout(() => resolve(100), time)});
    return (dispatch: any) => promise.then(v => dispatch({ type: Types.INCREMENT, amount: v}));
}


export default class Counter extends React.Component<Props, {}> {

    render() {
        const increment: MyAction = { type: Types.INCREMENT, amount: 3};
        const decrement: MyAction = { type: Types.DECREMENT, amount: 2};
        return (
            <div>
                <p>Clicked: {this.props.value.num} times</p>
                <button onClick={() => store.dispatch(async(1000))}>Increment 3</button>
                <button onClick={() => store.dispatch(decrement)}>Decrement 2</button>
            </div>
        )
    }
}