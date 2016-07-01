import {ChatState, MyAction, ActionTypes, ChatMessage} from "./Models";
import {List} from "immutable";

const initialState:ChatState = {messages: List.of<ChatMessage>()};

export function chat(state: ChatState = initialState, action: MyAction): ChatState {
    //console.log(action.type); //check which action has occurred;
    switch (action.type) {
        case ActionTypes.SEND_MESSAGE:
            console.log("sended");
            return state;
        case ActionTypes.RECEIVE_MESSAGE:
            return {messages: state.messages.push(action.message)};
        default:
            return state
    }
}