import * as React from 'react';
import {connect} from "react-redux";
import {DispatchActions} from "./Models";
import {Dispatch} from "redux";
import Counter from "./Counter";

export default connect(
    (state: any) => {return {state: state.counter}},
    (dispatch: Dispatch) => {return {actions: new DispatchActions(dispatch)}}
)(Counter);
