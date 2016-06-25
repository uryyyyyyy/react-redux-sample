import * as React from "react";
import TodoList from "../TodoList";
import {spy} from "sinon";
import {assert} from "chai";
import {Todo} from "../Models";
import * as TestUtils from "react-addons-test-utils";
import {List} from "immutable";

describe('TodoList test', () => {

    it('rendering test: it will call fetchAll()', () => {
        const spyCB:any = spy();
        const actions:any = {fetchAll: spyCB};
        const todos: List<Todo> = List.of<Todo>();
        const counterComponent: any = TestUtils.renderIntoDocument(
            <TodoList todos={todos} actions={actions} />
        );
        assert.deepEqual(spyCB.calledOnce, true);
    });
});