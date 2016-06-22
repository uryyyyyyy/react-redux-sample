import {counter} from './Reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(
    counter,
    applyMiddleware(thunk)
);

export default store