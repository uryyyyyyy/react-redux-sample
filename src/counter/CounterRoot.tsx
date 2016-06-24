import React = require('react');
import {connect} from "react-redux";
import {CounterState, DispatchActions} from "./Models";
import {Dispatch} from "redux";
import Counter from "./Counter";

interface Props {
    state?: CounterState;
    dispatch?: Dispatch;
}

export class CounterRoot extends React.Component<Props, {}> {

    render() {
        const actions = new DispatchActions(this.props.dispatch);
        return (
            <Counter value={this.props.state} actions={actions}/>
        )
    }
}


function mapStateToProps(state: any):any {
    return {
        state: state.counter
    };
}

const counterRoot = connect(mapStateToProps)(CounterRoot);
export default counterRoot