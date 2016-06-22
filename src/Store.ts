import { createStore } from 'redux'
import {counter} from './Reducer'

const store = createStore(counter);

export default store