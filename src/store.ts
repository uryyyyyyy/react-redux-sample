import counter, { CounterActions, CounterState } from './counter/module'
import upload, { FileUploadActions, FileUploadState } from './upload/module'
import { createStore, combineReducers, Action } from 'redux'

export default createStore(
  combineReducers({
    counter,
    upload
  })
)

export interface ReduxState {
  counter: CounterState
  upload: FileUploadState
}

export type ReduxAction = CounterActions | FileUploadActions | Action
