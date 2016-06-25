import * as React from "react";
import TodoList from "../TodoList";
import {spy} from "sinon";
import {assert} from "chai";
import {Todo} from "../Models";
import {List} from "immutable";
import {renderWithMui} from "../../__test__/TestUtil";

describe('TodoList test', () => {

    it('rendering test: it will call fetchAll()', () => {
        const spyCB:any = spy();
        const actions:any = {fetchAll: spyCB};
        const todos: List<Todo> = List.of<Todo>();
        const component: any = renderWithMui(<TodoList todos={todos} actions={actions} />);
        assert.deepEqual(spyCB.calledOnce, true);
    });
});