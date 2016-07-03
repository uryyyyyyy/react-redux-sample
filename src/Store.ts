import {counter} from "./counter/Reducer";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

export default createStore(
    combineReducers({
        counter
    }),
    applyMiddleware(thunk)
);
