import {MyAction, ActionTypes, JsonObject} from "./Models";
import * as axios from "axios";

export function fetchAmountAction() {
    return (dispatch: (action: MyAction) => any) => {

        function failCB(ex:Error): void {
            // side-effect should be called in this function.
            console.error(ex);
            dispatch({ type: ActionTypes.FETCH_FAIL})
        }

        function successCB(json:Axios.AxiosXHR<JsonObject>): void {
            const action = { type: ActionTypes.INCREMENT, amount: json.data.amount};
            dispatch(action)
        }

        dispatch({ type: ActionTypes.FETCH_REQUEST});
        return axios.get('/api/count')
            .then(successCB)
            .catch(failCB)
    }
}

export function incrementAction(amount: number): MyAction {
    return { type: ActionTypes.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
    return { type: ActionTypes.DECREMENT, amount: amount}
}