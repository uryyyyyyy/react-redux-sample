import * as Types from "./ActionTypes";
import {GlobalState, MyAction} from "./Models";
import store from "./Store";

const initialState:GlobalState = {num: 0};

export function counter(state: GlobalState = initialState, action: MyAction): GlobalState {
    switch (action.type) {
        case Types.INCREMENT:
            console.log("inc start")
            store.dispatch({ type: Types.DECREMENT, amount: 2})
            return {num: state.num + action.amount};
        case Types.DECREMENT:
            return {num: state.num - action.amount};
        default:
            return state
    }
}