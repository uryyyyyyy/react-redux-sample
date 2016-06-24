import {MyAction, ActionTypes} from "./Models";

export function incrementAction(text: string): MyAction {
    return { type: ActionTypes.INCREMENT, text: text}
}

export function decrementAction(id: number): MyAction {
    return { type: ActionTypes.DECREMENT, id: id}
}