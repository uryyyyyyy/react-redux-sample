import {assert} from "chai";
import {async} from "../Async";
import * as ReduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const reduxMockStore:any = ReduxMockStore;

describe('Async test', () => {
    it('引数に応じてコールバック内で決まった文字列になること', function (done) {
        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const getState = {};

        const store = mockStore(getState);

        store.dispatch(async(1000)).then(() => {
            const actions = store.getActions()
            assert.deepEqual(actions[0], { type: 'fetching' });
            assert.deepEqual(actions[1], { type: 'INCREMENT', amount: 100 });
            done();
        }).catch(done);
    });
});