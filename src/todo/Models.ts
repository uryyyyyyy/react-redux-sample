import {decrementAction, incrementAction, fetchAllAction} from "./ActionCreators";
import {List} from "immutable";

export interface TodoInterface {
    id: number;
    text: string;
    isComplete: boolean;
}

export class Todo implements TodoInterface{
    public id: number;
    public text: string;
    public isComplete: boolean;
    constructor(id: number, text: string, isComplete: boolean){
        this.id = id;
        this.text = text;
        this.isComplete = isComplete;
    }
}

export interface TodoState {
    todos: List<Todo>;
}

export interface MyAction {
    type: string;
    id?: number;
    text?: string;
    todos?: TodoInterface[];
}

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    public createTodo(text: string) {
        this.dispatch(incrementAction(text))
    }

    public deleteTodo(id: number) {
        this.dispatch(decrementAction(id))
    }

    public fetchAll() {
        this.dispatch(fetchAllAction())
    }
}

export class ActionTypes{
    static ADD_TODO = 'TODO_ADD';
    static DELETE_TODO = 'TODO_DELETE';
    static FETCH_ALL = 'TODO_FETCH_ALL';
    static FETCH_REQUEST = 'TODO_FETCH_REQUEST';
    static FETCH_FAIL = 'TODO_FETCH_FAIL';
}
