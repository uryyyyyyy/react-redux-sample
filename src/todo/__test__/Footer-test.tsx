import * as React from "react";
import Footer from "../Footer";
import {spy} from "sinon";
import {assert} from "chai";
import * as TestUtils from "react-addons-test-utils";
import * as ReactDOM from "react-dom";
import {renderWithMui} from "../../__test__/TestUtil";

describe('Footer test', () => {

    it('click button', () => {
        
        const spyCB:any = spy();
        const actions:any = {createTodo: spyCB};
        const component: any = renderWithMui(<Footer actions={actions} />)

        const dom = ReactDOM.findDOMNode(component);
        const inputs: NodeListOf<HTMLInputElement> = dom.getElementsByTagName("input");
        const input: HTMLInputElement = inputs[0];
        input.value = "aa";
        TestUtils.Simulate.change(input);
        
        const buttons: NodeListOf<HTMLButtonElement> = dom.getElementsByTagName("button");
        const button: HTMLButtonElement = buttons[0];

        TestUtils.Simulate.click(button);
        assert.deepEqual(spyCB.calledOnce, true);
        assert.deepEqual(spyCB.calledWith("aa"), true);

    });
});