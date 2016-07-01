import * as React from "react";
import {ChatMessage} from "./Models";
import {List} from "immutable";

interface Props {
    messages: List<ChatMessage>;
}

export default class MessageList extends React.Component<Props, {}> {

    render() {
        const messages = this.props.messages.map((message:ChatMessage) => (
            <p key={message.id} >
                {message.user}: {message.message}
            </p>
        ));
        return (
            <div>
                {messages}
            </div>
        )
    }
}