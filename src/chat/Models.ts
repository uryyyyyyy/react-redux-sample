import {receiveMessage, sendMessage} from "./ActionCreators";
import {List} from "immutable";

export interface ChatState {
    messages: List<ChatMessage>;
}

export interface JsonObject {
    id: number;
    user: string;
    message: string;
}

export class ChatMessage implements JsonObject{
    constructor(public id: number, public user: string, public message: string){}
}

export interface MyAction {
    type: string;
    message?: ChatMessage;
}

export class DispatchActions {
    constructor(
        private ws: WebSocket,
        private dispatch: (action: any) => any){
        this.dispatch = dispatch
    }

    public sendMessage(msg: string) {
        this.dispatch(sendMessage(this.ws, msg))
    }

    public receiveMessage(data: any) {
        this.dispatch(receiveMessage(data))
    }
}

export class ActionTypes{
    static SEND_MESSAGE = 'COUNTER_INCREMENT';
    static RECEIVE_MESSAGE = 'COUNTER_DECREMENT';
}
