import React = require('react');
import {connect} from "react-redux";
import {DispatchActions, TodoState} from "./Models";
import {Dispatch} from "redux";
import TodoList from "./TodoList";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

interface Props {
    state?: TodoState;
    dispatch?: Dispatch;
}

export class TodoListRoot extends React.Component<Props, {}> {

    render() {
        const actions = new DispatchActions(this.props.dispatch);
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
                <h2>TODO List</h2>
                <TodoList todos={this.props.state.todos} actions={actions}/>
            </div>
                </MuiThemeProvider>
        )
    }
}


function mapStateToProps(state: any):any {
    return {
        state: state.todoReduce
    };
}

const todoListRoot = connect(mapStateToProps)(TodoListRoot);
export default todoListRoot