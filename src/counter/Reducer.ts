import {CounterState, MyAction, ActionTypes} from "./Models";

const initialState:CounterState = {num: 0};

export function counter(state: CounterState = initialState, action: MyAction): CounterState {
    //console.log(action.type); //check which action has occurred;
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {num: state.num + action.amount};
        case ActionTypes.DECREMENT:
            return {num: state.num - action.amount};
        default:
            return state
    }
}