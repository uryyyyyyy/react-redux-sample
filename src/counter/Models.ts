import {decrementAction, incrementAction, fetchAmountAction} from "./ActionCreators";

export interface CounterState {
    num: number;
}

export interface JsonObject {
    amount: number;
}

export interface MyAction {
    type: string;
    amount?: number;
}

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    public increment(amount: number) {
        this.dispatch(incrementAction(amount))
    }

    public decrement(amount: number) {
        this.dispatch(decrementAction(amount))
    }

    public fetchAmount() {
        this.dispatch(fetchAmountAction())
    }
}

export class ActionTypes{
    static INCREMENT = 'COUNTER_INCREMENT';
    static DECREMENT = 'COUNTER_DECREMENT';
    static FETCH_REQUEST = 'COUNTER_FETCH_REQUEST';
    static FETCH_FAIL = 'COUNTER_FETCH_FAIL';
}
