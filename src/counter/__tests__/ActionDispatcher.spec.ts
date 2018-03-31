import {incrementAmount} from '../module'
import {ActionDispatcher} from '../Container'

describe('ActionDispatcher', () => {

  it('increment', () => {
    const spy: any = {dispatch: null}
    spyOn(spy, 'dispatch')
    const actions = new ActionDispatcher(spy.dispatch)
    actions.increment(100)
    expect(spy.dispatch.calls.count()).toEqual(1)
    expect(spy.dispatch.calls.argsFor(0)[0]).toEqual(incrementAmount(100))
  })
})