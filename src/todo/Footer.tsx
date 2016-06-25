import * as React from "react";
import {DispatchActions} from "./Models";
import {RaisedButton, TextField} from "material-ui";
import AddIcon from 'material-ui/svg-icons/content/add';

export interface Props {
    actions: DispatchActions
}

interface State {
    text: string;
}

export default class Footer extends React.Component<Props, State> {

    state: State = {text: ""};
    public keyPress(event: React.KeyboardEvent): void {
        if(event.keyCode == 13){
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
            <TextField
                hintText="input new todo name"
                value={this.state.text}
                onChange={this.editText.bind(this)}
                onKeyDown={this.keyPress.bind(this)}/>
            <RaisedButton
                onClick={this.createNewOne.bind(this)}
                primary={true}
                icon={<AddIcon />}/>
        </div>
    }
}