import {assert} from "chai";
import {counter} from "../Reducer";
import {GlobalState, MyAction} from "../Models";
import * as Types from "../ActionTypes";

describe('reducer test', () => {
    it('INCREMENT', () => {
        const state: GlobalState = {num: 4};
        const action: MyAction = { type: Types.INCREMENT, amount: 3};
        const result = counter(state, action);
        assert.deepEqual(result.num, state.num + 3);
    });

    it('DECREMENT', () => {
        const state: GlobalState = {num: -2};
        const action: MyAction = { type: Types.DECREMENT, amount: 10};
        const result = counter(state, action);
        assert.deepEqual(result.num, state.num - 10);
    });
});