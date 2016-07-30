import {connect} from "react-redux";
import {DispatchActions} from "./Models";
import {Dispatch} from "redux";
import Counter from "./Counter";

export default connect(
    (store: any) => {return {state: store.counter}},
    (dispatch: Dispatch<any>) => {return {actions: new DispatchActions(dispatch)}}
)(Counter);
