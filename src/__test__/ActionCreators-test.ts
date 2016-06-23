import {assert} from "chai";
import * as ReduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {fetchAmountAction} from "../ActionCreators";
import {ActionTypes} from "../Models";
import * as nock from "nock";

describe('Async test', () => {
    const reduxMockStore:any = ReduxMockStore;

    it('nock test', function (done) {

        nock('http://localhost/')
            .get('/json/sample.json')
            .reply(200, { amount: 100 });

        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const state = {};
        const store = mockStore(state);
        store.dispatch(fetchAmountAction()).then(() => {
            const actions = store.getActions();
            assert.deepEqual(actions[0], { type: 'FETCH_TODOS_REQUEST' });
            assert.deepEqual(actions[1], { type: ActionTypes.INCREMENT, amount: 100 });
            done();
        }).catch(done);
    });
});