import * as React from "react";
import Counter from "../Counter";
import {spy} from "sinon";
import {assert} from "chai";
import {CounterState} from "../Models";
import * as TestUtils from "react-addons-test-utils";
import * as ReactDOM from "react-dom";

describe('Counter test', () => {

    it('rendering test', () => {
        const actions:any = {};
        const state: CounterState = {num: 1, loadingCount: 1};
        const counterComponent: any = TestUtils.renderIntoDocument(
            <Counter state={state} actions={actions} />
        );

        const counterDOM = ReactDOM.findDOMNode(counterComponent);
        const ps: NodeListOf<HTMLParagraphElement> = counterDOM.getElementsByTagName("p");

        const p0: HTMLParagraphElement = ps[0];
        assert.deepEqual(p0.textContent, "loading");

        const p1: HTMLParagraphElement = ps[1];
        assert.deepEqual(p1.textContent, "score: 1");
    });

    it('click test', () => {
        const spyCB:any = spy();
        const actions:any = {fetchAmount: spyCB};
        const state: CounterState = {num: 0, loadingCount: 0};
        const counterComponent: any = TestUtils.renderIntoDocument(
            <Counter state={state} actions={actions} />
        );

        const counterDOM = ReactDOM.findDOMNode(counterComponent);
        const buttons: NodeListOf<HTMLButtonElement> = counterDOM.getElementsByTagName("button");
        const button: HTMLButtonElement = buttons[2];

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
        assert.deepEqual(spyCB.calledWith(), true);
    });
});