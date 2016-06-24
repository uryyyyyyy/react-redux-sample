import {decrementAction, incrementAction} from "./ActionCreators";
import {List} from "immutable";

export class Todo {
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
}

export class ActionTypes{
    static INCREMENT = 'TODO_INCREMENT';
    static DECREMENT = 'TODO_DECREMENT';
}
