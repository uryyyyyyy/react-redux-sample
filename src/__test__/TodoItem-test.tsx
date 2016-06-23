import * as React from "react";
import Counter from "../Counter";
import {spy} from "sinon";
import * as Types from "../ActionTypes";
import {assert} from "chai";
import TestUtils = require("react-addons-test-utils");
import ReactDOM = require('react-dom');
import {MyAction} from "../Models";

describe('Counter test', () => {

    it('changes the text after click', () => {
        const spyCB:any = spy();
        const checkbox: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} dispatch={spyCB} />
        );

        const checkboxNode = ReactDOM.findDOMNode(checkbox);
        const p = checkboxNode.getElementsByTagName("p")[0];
        const button:any = checkboxNode.getElementsByTagName("button")[1];
        
        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);

        const decrement: MyAction = { type: Types.DECREMENT, amount: 2};
        assert.deepEqual(spyCB.calledWith(decrement), true);
    });
});