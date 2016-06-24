import * as React from "react";
import Counter from "../Counter";
import {spy} from "sinon";
import {assert} from "chai";
import {MyAction, DispatchActions, ActionTypes} from "../Models";
import * as TestUtils from "react-addons-test-utils";
import * as ReactDOM from "react-dom";

describe('Counter test', () => {

    it('normal click test', () => {
        const spyCB:any = spy();
        const actions:DispatchActions = new DispatchActions(spyCB);
        const counterComponent: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} actions={actions} />
        );

        const counterDOM = ReactDOM.findDOMNode(counterComponent);
        const buttons: NodeListOf<HTMLButtonElement> = counterDOM.getElementsByTagName("button");
        const button: HTMLButtonElement = buttons[1];

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);

        const decrement: MyAction = { type: ActionTypes.DECREMENT, amount: 2};
        assert.deepEqual(spyCB.calledWith(decrement), true);
    });

    it('click test2', () => {
        const spyCB:any = spy();
        const actions:any = {fetchAmount: spyCB};
        const counterComponent: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} actions={actions} />
        );

        const counterDOM = ReactDOM.findDOMNode(counterComponent);
        const buttons: NodeListOf<HTMLButtonElement> = counterDOM.getElementsByTagName("button");
        const button: HTMLButtonElement = buttons[2];

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
        assert.deepEqual(spyCB.calledWith(), true);
    });
});