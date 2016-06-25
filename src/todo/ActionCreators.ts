import {MyAction, ActionTypes, TodoInterface, Todo} from "./Models";
import * as axios from "axios";
import {List} from "immutable";

export function incrementAction(text: string): MyAction {
    return { type: ActionTypes.ADD_TODO, text: text}
}

export function decrementAction(id: number): MyAction {
    return { type: ActionTypes.DELETE_TODO, id: id}
}

export function fetchAllAction() {
    return (dispatch: (action: MyAction) => any) => {
        const failCB = (ex:Error) => {
            console.error(ex);
            dispatch({ type: ActionTypes.FETCH_FAIL})
        };
        const successCB = (json:Axios.AxiosXHR<TodoInterface[]>) => {
            const todos_arr: Todo[] = json.data.map(v => new Todo(v.id, v.text, v.isComplete));
            const todos: List<Todo> = List.of(...todos_arr);
            const action:MyAction = { type: ActionTypes.FETCH_ALL, todos: todos};
            dispatch(action)
        };
        dispatch({ type: ActionTypes.FETCH_REQUEST});
        return axios.get('/api/todos/all')
            .then(successCB)
            .catch(failCB)
    }
}