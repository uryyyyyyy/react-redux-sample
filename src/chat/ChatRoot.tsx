import React = require('react');
import {connect} from "react-redux";
import {DispatchActions, ChatState, ChatMessage, JsonObject} from "./Models";
import {Dispatch} from "redux";
import MessageList from "./MessageList";
import {receiveMessage} from "./ActionCreators";
import TextBox from "./TextBox";

interface Props {
    state?: ChatState;
    dispatch?: Dispatch;
}

export class ChatRoot extends React.Component<Props, {}> {

    private ws: WebSocket;

    componentDidMount(){
        this.ws = new WebSocket("ws://localhost:3000/chat");

        this.ws.onopen = ((e: Event) => {
            console.log("connected");
        });

        this.ws.onmessage = ((e: MessageEvent) => {
            const json: JsonObject = JSON.parse(e.data);
            console.log(json);
            const msg: ChatMessage = new ChatMessage(json.id, json.user, json.message);
            this.props.dispatch(receiveMessage(msg))
        });

        this.ws.onclose = ((e: CloseEvent) => {
            console.log("disconnected");
        });
    }

    componentWillUnmount(){
        this.ws.close()
    }

    render() {
        const actions = new DispatchActions(this.ws, this.props.dispatch);
        return (
            <div>
                <h2>Chat</h2>
                <TextBox actions={actions}/>
                <MessageList messages={this.props.state.messages}/>
            </div>
        )
    }
}


function mapStateToProps(state: any):any {
    return {
        state: state.chat
    };
}

const chatRoot = connect(mapStateToProps)(ChatRoot);
export default chatRoot