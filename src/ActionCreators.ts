import {async} from "./Async";
import {MyAction, ActionTypes} from "./Models";
import * as axios from "axios";
import AxiosXHR = Axios.AxiosXHR;

export function setTimeoutAction(time: number) {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "fetching"});
        return async(time).then(v => dispatch({ type: ActionTypes.INCREMENT, amount: v}/*fetch done*/));
    };
}

export function fetchTodos() {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "FETCH_TODOS_REQUEST"});
        return axios.get('/todos')
            .then((json:AxiosXHR<any[]>) => dispatch({ type: "FETCH_TODOS_SUCCESS", json: json.data}))
            .catch(ex => dispatch({ type: "FETCH_TODOS_SUCCESS", ex: ex}))
    }
}

export function incrementAction(amount: number): MyAction {
    return { type: ActionTypes.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
    return { type: ActionTypes.DECREMENT, amount: amount}
}