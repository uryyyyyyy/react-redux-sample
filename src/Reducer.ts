import * as Types from "./ActionTypes";
import {GlobalState, MyAction} from "./Models";

const initialState:GlobalState = {num: 0};

export function counter(state: GlobalState = initialState, action: MyAction): GlobalState {
    console.log(action.type);
    switch (action.type) {
        case Types.INCREMENT:
            return {num: state.num + action.amount};
        case Types.DECREMENT:
            return {num: state.num - action.amount};
        default:
            return state
    }
}