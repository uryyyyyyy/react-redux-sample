import {Action} from 'redux'

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement',
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

export interface CounterState {
  num: number
}

export type CounterActions = IncrementAction | DecrementAction

const initialState:CounterState = {num: 0}

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionNames.INC:
      return {num: state.num + action.plusAmount}
    case ActionNames.DEC:
      return {num: state.num - action.minusAmount}
    default:
      return state
  }
}
