import * as React from "react";
import Counter from "../Counter";
import {spy} from "sinon";
import {assert} from "chai";
import {MyAction, DispatchActions, ActionTypes} from "../Models";
import * as TestUtils from "react-addons-test-utils";
import * as ReactDOM from 'react-dom';

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
        
        const decrement: MyAction = { type: ActionTypes.DECREMENT, amount: 2};
        assert.deepEqual(spyCB.calledWith(decrement), true);
    });

    it('click test2', () => {
        const spyCB:any = spy();
        const ss:any = {fetchAmount: spyCB};
        const checkbox: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} actions={ss} />
        );

        const checkboxNode = ReactDOM.findDOMNode(checkbox);
        const button:any = checkboxNode.getElementsByTagName("button")[2];

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
        assert.deepEqual(spyCB.calledWith(), true);
    });
});