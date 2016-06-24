import {counter} from "./counter/Reducer";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({
        counter
    }),
    applyMiddleware(thunk)
);

export default store