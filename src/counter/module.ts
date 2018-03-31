import {Action} from 'redux'

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement',
  FETCH_START = 'counter/fetch_request_start',
  FETCH_FINISH = 'counter/fetch_request_finish'
}

interface IncrementAction extends Action {
  type: ActionNames.INC
  plusAmount: number
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  plusAmount: amount
})

interface DecrementAction extends Action {
  type: ActionNames.DEC
  minusAmount: number
}
export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  minusAmount: amount
})

interface FetchRequestStartAction extends Action {
  type: ActionNames.FETCH_START
  appAction: boolean
}
export const fetchRequestStart = (): FetchRequestStartAction => ({
  type: ActionNames.FETCH_START,
  appAction: true,
})

interface FetchRequestFinishAction extends Action {
  type: ActionNames.FETCH_FINISH
  appAction: boolean
}
export const fetchRequestFinish = (): FetchRequestFinishAction => ({
  type: ActionNames.FETCH_FINISH,
  appAction: true,
})

export interface CounterState {
  num: number
  loadingCount: number
}

export type CounterActions = IncrementAction
  | DecrementAction
  | FetchRequestStartAction
  | FetchRequestFinishAction

const initialState:CounterState = {
  num: 0,
  loadingCount: 0
}

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionNames.INC:
      return Object.assign({}, state, {num: state.num + action.plusAmount})
    case ActionNames.DEC:
      return Object.assign({}, state, {num: state.num - action.minusAmount})
    case ActionNames.FETCH_START: {
      return Object.assign({}, state, {loadingCount: state.loadingCount + 1})
    }
    case ActionNames.FETCH_FINISH: {
      return Object.assign({}, state, {loadingCount: state.loadingCount - 1})
    }
    default:
      return state
  }
}
