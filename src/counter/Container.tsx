import * as React from 'react'
import {Counter} from './Counter'
import {useDispatch, useSelector} from 'react-redux'
import {CounterActions, CounterState, decrementAmount, incrementAmount} from './module'
import {ReduxState} from '../store'
import {Dispatch} from 'redux'

export class ActionDispatcher {
  constructor(private dispatch: Dispatch<CounterActions>) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount))
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount))
  }
}

export default function CounterContainer() {
  const count = useSelector<ReduxState, CounterState>((state) => {
    return state.counter
  })
  return (
      <Counter
          value={count}
          actions={new ActionDispatcher(useDispatch())}
      />
  )
}
