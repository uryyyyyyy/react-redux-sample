import {counter} from "./counter/Reducer";
import {todoReduce} from "./todo/Reducer";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({
        counter,
        todoReduce
    }),
    applyMiddleware(thunk)
);

export default store