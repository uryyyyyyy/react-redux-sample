import * as React from 'react'
import {CounterState} from './module'
import {ActionDispatcher} from './Container'

interface Props {
  value: CounterState
  actions: ActionDispatcher
}

export function Counter(props: Props) {
    return (
      <div>
        <p>{`score: ${props.value.num}`}</p>
        <button onClick={() => props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => props.actions.decrement(2)}>Decrement 2</button>
      </div>
    )
}