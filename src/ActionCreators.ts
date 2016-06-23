import * as Types from "./ActionTypes";
import {async} from "./Async";
import {MyAction} from "./Models";

export function setTimeoutAction(time: number) {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "fetching"});
        return async(time).then(v => dispatch({ type: Types.INCREMENT, amount: v}/*fetch done*/));
    };
}

export function incrementAction(amount: number): MyAction {
    return { type: Types.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
    return { type: Types.DECREMENT, amount: amount}
}