import {TodoState, MyAction, ActionTypes, Todo} from "./Models";
import {List} from "immutable";

const initialState:TodoState = {todos: List.of<Todo>()};

export function todoReduce(state: TodoState = initialState, action: MyAction): TodoState {

    function addTodo(state: TodoState, action: MyAction):TodoState {
        let newNumber = 1;
        if(!state.todos.isEmpty()) newNumber = state.todos.map(v => v.id).max() + 1;
        const newTodo = new Todo(newNumber, action.text, false);
        return {todos: state.todos.push(newTodo)};
    }

    function deleteTodo(state:TodoState, action:MyAction):TodoState {
        return {todos: state.todos.filter(item => item.id !== action.id)}
    }

    function fetchAll(state:TodoState, action:MyAction) {
        return {todos: action.todos}
    }

    //console.log(action);
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return addTodo(state, action);
        case ActionTypes.DELETE_TODO:
            return deleteTodo(state, action);
        case ActionTypes.FETCH_ALL:
            return fetchAll(state, action);
        default:
            return state
    }
}