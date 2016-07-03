import {assert} from "chai";
import * as ReduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {fetchAmountAction} from "../ActionCreators";
import {ActionTypes} from "../Models";
import * as nock from "nock";

describe('Async test', () => {
    const reduxMockStore:any = ReduxMockStore;

    it('nock success test',  (done: MochaDone) => {
        //use mock server.

        nock('http://localhost/')
            .get('/api/count')
            .reply(200, { amount: 100 });

        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const state = {};
        const store = mockStore(state);
        store.dispatch(fetchAmountAction()).then(() => {
            const actions = store.getActions();
            assert.deepEqual(actions[0], { type: ActionTypes.FETCH_REQUEST });
            assert.deepEqual(actions[1], { type: ActionTypes.FETCH_SUCCESS, amount: 100 });
            done();
        }).catch(done);
    });

    it('nock fail test',  (done: MochaDone) => {
        //no mock server, so request must be fail.

        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const state = {};
        const store = mockStore(state);
        store.dispatch(fetchAmountAction()).then(() => {
            const actions = store.getActions();
            assert.deepEqual(actions[0], { type: ActionTypes.FETCH_REQUEST });
            assert.deepEqual(actions[1].type, ActionTypes.FETCH_FAIL);
            done();
        }).catch(done);
    });
});