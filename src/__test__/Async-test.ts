import {assert} from "chai";
import {async} from "../Async";

describe('Async test', () => {
    it('async test', function (done) {
        async(50).then((value) => {
            assert.deepEqual(100, value);
            done();
        }).catch(done);
    });
});