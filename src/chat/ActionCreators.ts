import {MyAction, ActionTypes, ChatMessage} from "./Models";

export function sendMessage(ws: WebSocket, msg: string) {
    return (dispatch: (action: MyAction) => any) => {
        ws.send(msg);
    }
}

export function receiveMessage(data: ChatMessage): MyAction {
    return { type: ActionTypes.RECEIVE_MESSAGE, message: data}
}