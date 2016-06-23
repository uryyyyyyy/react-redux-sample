import {assert} from "chai";
import * as ReduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as proxyquire from "proxyquire";

describe('Async test', () => {
    const reduxMockStore:any = ReduxMockStore;

    it('middleware test', function (done) {
        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const {setTimeoutAction} = proxyquire("../ActionCreators", {
            "./Async": {async: () => new Promise((resolve, reject) => resolve(10))}
        });

        const state = {};
        const store = mockStore(state);
        store.dispatch(setTimeoutAction(50)).then(() => {
            const actions = store.getActions();
            assert.deepEqual(actions[0], { type: 'fetching' });
            assert.deepEqual(actions[1], { type: 'INCREMENT', amount: 10 });
            done();
        }).catch(done);
    });
});