import {assert} from "chai";
import {counter} from "../Reducer";
import {CounterState, MyAction, ActionTypes} from "../Models";

describe('reducer test', () => {
    it('INCREMENT', () => {
        const state: CounterState = {num: 4, loadingCount:0};
        const action: MyAction = { type: ActionTypes.INCREMENT, amount: 3};
        const result = counter(state, action);
        assert.deepEqual(result.num, state.num + 3);
        assert.deepEqual(result.loadingCount, state.loadingCount);
    });

    it('DECREMENT', () => {
        const state: CounterState = {num: -2, loadingCount:0};
        const action: MyAction = { type: ActionTypes.DECREMENT, amount: 10};
        const result = counter(state, action);
        assert.deepEqual(result.num, state.num - 10);
        assert.deepEqual(result.loadingCount, state.loadingCount);
    });

    it('DECREMENT', () => {
        const state: CounterState = {num: -2, loadingCount:1};
        const action: MyAction = { type: ActionTypes.FETCH_SUCCESS, amount: 10};
        const result = counter(state, action);
        assert.deepEqual(result.num, state.num + 10);
        assert.deepEqual(result.loadingCount, state.loadingCount -1);
    });
});