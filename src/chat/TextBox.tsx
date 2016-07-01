import * as React from "react";
import {DispatchActions} from "./Models";

export interface Props {
    actions: DispatchActions
}

interface State {
    text: string;
}

export default class TextBox extends React.Component<Props, State> {

    state: State = {text: ""};
    public keyPress(event: React.KeyboardEvent): void {
        if(event.keyCode == 13){
            this.createNewOne.bind(this)()
        }
    }

    public createNewOne(): void {
        if (this.state.text.trim() === '') return;
        this.props.actions.sendMessage(this.state.text);
        this.setState({text: ""});
    };

    private editText(e:any): void {
        this.setState({text: e.target.value});
    };

    render() {
        return <div>
            <input
                value={this.state.text}
                onChange={this.editText.bind(this)}
                onKeyDown={this.keyPress.bind(this)}/>
            <button
                onClick={this.createNewOne.bind(this)}
                children="send"
                />
        </div>
    }
}