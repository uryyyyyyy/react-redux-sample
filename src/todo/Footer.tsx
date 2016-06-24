import * as React from "react";
import {DispatchActions} from "./Models";

export interface Props {
    actions: DispatchActions
}

interface State {
    text: string;
}

export default class Footer extends React.Component<Props, State> {

    state: State = {text: ""};
    public keyPress(event:any): void {
        if(event.charCode == 13){
            this.createNewOne.bind(this)()
        }
    }

    public createNewOne(): void {
        if (this.state.text.trim() === '') return;
        this.props.actions.createTodo(this.state.text);
        this.setState({text: ""});
    };

    private editText(e:any): void {
        this.setState({text: e.target.value});
    };

    render() {
        return <div>
            <input
                type="text"
                placeholder="input new item"
                value={this.state.text}
                onChange={this.editText.bind(this)}
                onKeyPress={this.keyPress.bind(this)}
            />
            <button
                id='clear-completed'
                onClick={this.createNewOne.bind(this)}>
                Add
            </button>
        </div>
    }
}