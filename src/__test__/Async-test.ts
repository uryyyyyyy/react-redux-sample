import {assert} from "chai";
import * as ReduxMockStore from "redux-mock-store";
import {async} from "../Async";
const reduxMockStore:any = ReduxMockStore;

describe('Async test', () => {
    it('async test', function (done) {
        async(50).then((value) => {
            assert.deepEqual(100, value);
            done();
        }).catch(done);
    });
});