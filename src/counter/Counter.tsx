import * as React from 'react'
import {CounterState} from './module'
import {ActionDispatcher} from './Container'

interface Props {
  value: CounterState
  actions: ActionDispatcher
  param?: string
}

export function Counter(props: Props) {
    return (
      <div>
        {(props.param === undefined) ? null : <div>{props.param}</div>}
        <p>{`score: ${props.value.num}`}</p>
        <button onClick={() => props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => props.actions.decrement(2)}>Decrement 2</button>
        <button onClick={() => props.actions.asyncIncrement()}>async Increment 100</button>
        {(props.value.loadingCount === 0) ? null : <p>loading</p>}
      </div>
    )
}