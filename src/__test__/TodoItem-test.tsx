import * as React from "react";
import Counter from "../Counter";
import {spy} from "sinon";
import * as Types from "../ActionTypes";
import {assert} from "chai";
import {MyAction} from "../Models";
import TestUtils = require("react-addons-test-utils");
import ReactDOM = require('react-dom');
import * as ReduxMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
const reduxMockStore:any = ReduxMockStore

describe('Counter test', () => {

    it('normal click test', () => {
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

    it('click test2', () => {
        const middlewares = [thunk];
        const mockStore = reduxMockStore(middlewares);

        const getState = {};

        const store = mockStore(getState);
        
        const checkbox: any = TestUtils.renderIntoDocument(
            <Counter value={{num: 0}} dispatch={store.dispatch} />
        );
        
        const checkboxNode = ReactDOM.findDOMNode(checkbox);
        const p = checkboxNode.getElementsByTagName("p")[0];
        const button:any = checkboxNode.getElementsByTagName("button")[0];
        TestUtils.Simulate.click(button);

        const actions = store.getActions();
        const expect = { type: 'fetching' };
        assert.deepEqual(actions[0], expect);
    });
});