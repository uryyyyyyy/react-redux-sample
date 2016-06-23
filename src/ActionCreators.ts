import {async} from "./Async";
import {MyAction, ActionTypes} from "./Models";

export function setTimeoutAction(time: number) {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "fetching"});
        return async(time).then(v => dispatch({ type: ActionTypes.INCREMENT, amount: v}/*fetch done*/));
    };
}

export function incrementAction(amount: number): MyAction {
    return { type: ActionTypes.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
    return { type: ActionTypes.DECREMENT, amount: amount}
}