import * as React from "react";
import Counter from "../Counter";
import {spy} from "sinon";
import * as Types from "../ActionTypes";
import {assert} from "chai";
import {MyAction, DispatchActions} from "../Models";
import TestUtils = require("react-addons-test-utils");
import ReactDOM = require('react-dom');

describe('Counter test', () => {

    it('normal click test', () => {
        const spyCB:any = spy();
        const ss:DispatchActions = new DispatchActions(spyCB);
        const checkbox: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} actions={ss} />
        );

        const checkboxNode = ReactDOM.findDOMNode(checkbox);
        const button:any = checkboxNode.getElementsByTagName("button")[1];
        
        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
        
        const decrement: MyAction = { type: Types.DECREMENT, amount: 2};
        assert.deepEqual(spyCB.calledWith(decrement), true);
    });

    it('click test2', () => {
        const spyCB:any = spy();
        const ss:any = {async: spyCB};
        const checkbox: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} actions={ss} />
        );

        const checkboxNode = ReactDOM.findDOMNode(checkbox);
        const button:any = checkboxNode.getElementsByTagName("button")[2];

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
        assert.deepEqual(spyCB.calledWith(1000), true);
    });
});