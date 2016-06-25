import {assert} from "chai";
import {todoReduce} from "../Reducer";
import {TodoState, MyAction, ActionTypes, Todo} from "../Models";
import {List} from "immutable";

describe('reducer test', () => {
    it('ADD_TODO', () => {
        const state: TodoState = {todos: List.of<Todo>()};
        const action: MyAction = { type: ActionTypes.ADD_TODO, text: "new task"};
        const result = todoReduce(state, action);
        assert.deepEqual(result.todos.size, 1);
        assert.deepEqual(result.todos.get(0), new Todo(1, "new task", false));
    });

    it('FETCH_ALL', () => {
        const state: TodoState = {todos: List.of<Todo>()};
        const action: MyAction = { type: ActionTypes.FETCH_ALL, todos: List.of<Todo>(new Todo(1, "task", false))};
        const result = todoReduce(state, action);
        assert.deepEqual(result.todos.size, 1);
        assert.deepEqual(result.todos.get(0), new Todo(1, "task", false));
    });
});