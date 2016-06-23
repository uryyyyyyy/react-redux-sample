import {MyAction, ActionTypes, JsonObject} from "./Models";
import * as axios from "axios";

export function fetchAmountAction() {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "FETCH_TODOS_REQUEST"});
        return axios.get('/json/sample.json')
            .then((json:Axios.AxiosXHR<JsonObject>) => dispatch({ type: ActionTypes.INCREMENT, amount: json.data.amount}))
            .catch(ex => dispatch({ type: "FETCH_TODOS_SUCCESS", ex: ex}))
    }
}

export function incrementAction(amount: number): MyAction {
    return { type: ActionTypes.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
    return { type: ActionTypes.DECREMENT, amount: amount}
}