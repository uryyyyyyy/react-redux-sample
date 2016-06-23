import {assert} from "chai";
import * as ReduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as proxyquire from "proxyquire";
import nock = require("nock");
import {fetchTodos} from "../ActionCreators";

describe('Async test', () => {
    const reduxMockStore:any = ReduxMockStore;

    it('proxyquire test', function (done) {
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

    it('nock test', function (done) {

        nock('http://localhost/')
            .get('/todos')
            .reply(200, { todos: ['do something'] })

        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const state = {};
        const store = mockStore(state);
        store.dispatch(fetchTodos()).then(() => {
            const actions = store.getActions();
            assert.deepEqual(actions[0], { type: 'FETCH_TODOS_REQUEST' });
            assert.deepEqual(actions[1], { type: 'FETCH_TODOS_SUCCESS', json: { todos: ['do something'] } });
            done();
        }).catch(done);
    });
});