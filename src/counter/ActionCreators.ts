import {MyAction, ActionTypes, IAmount} from "./Models";
import {getRequest} from "../utils/HttpClient";

export function fetchAmountAction(forceFail: boolean) {
    return (dispatch: (action: MyAction) => any) => {

        function failCB():void {
            dispatch({ type: ActionTypes.FETCH_FAIL})
        }

        function successCB(amount: IAmount):void {
            const action = { type: ActionTypes.FETCH_SUCCESS, amountJson: amount};
            dispatch(action)
        }

        dispatch({ type: ActionTypes.FETCH_REQUEST});
        let url = '';
        if(forceFail){
            url = '/api/countFail'
        }else{
            url = '/api/count'
        }
        return getRequest<IAmount>(url, successCB, failCB)
    }
}

export function incrementAction(amount: number): MyAction {
    return { type: ActionTypes.INCREMENT, amount: amount}
}

export function decrementAction(amount: number): MyAction {
    return { type: ActionTypes.DECREMENT, amount: amount}
}