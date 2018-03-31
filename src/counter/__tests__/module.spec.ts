import reducer, { decrementAmount, CounterState, incrementAmount } from '../module'
import { PRODUCTION } from '../../Variables'

describe('counter/module', () => {
  it('INCREMENT', () => {
    const state: CounterState = { num: 4, loadingCount: 0 }
    const result = reducer(state, incrementAmount(3))
    expect(result.num).toBe(state.num + 3)
  })

  it('DECREMENT', () => {
    const state: CounterState = { num: 4, loadingCount: 0 }
    const result = reducer(state, decrementAmount(3))
    expect(result.num).toBe(state.num - 3)
  })

  it('check Env value', () => {
    expect(PRODUCTION).toBe(false)
  })
})
