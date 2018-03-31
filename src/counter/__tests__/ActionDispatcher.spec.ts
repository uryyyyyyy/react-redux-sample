import * as fetchMock from 'fetch-mock'
import { incrementAmount, fetchRequestStart, fetchRequestFinish } from '../module'
import { ActionDispatcher } from '../Container'

describe('ActionDispatcher', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  it('increment', () => {
    const spy: any = { dispatch: null }
    spyOn(spy, 'dispatch')
    const actions = new ActionDispatcher(spy.dispatch)
    actions.increment(100)
    expect(spy.dispatch.calls.count()).toEqual(1)
    expect(spy.dispatch.calls.argsFor(0)[0]).toEqual(incrementAmount(100))
  })

  it('fetchAmount success', async (done) => {
    fetchMock.get('/api/count', { body: { amount: 100 }, status: 200 })

    const spy: any = { dispatch: null }
    spyOn(spy, 'dispatch')
    const actions = new ActionDispatcher(spy.dispatch)
    await actions.asyncIncrement()
    expect(spy.dispatch.calls.count()).toEqual(3)
    expect(spy.dispatch.calls.argsFor(0)[0]).toEqual(fetchRequestStart())
    expect(spy.dispatch.calls.argsFor(1)[0]).toEqual(incrementAmount(100))
    expect(spy.dispatch.calls.argsFor(2)[0]).toEqual(fetchRequestFinish())
    done()
  })

  it('fetchAmount fail', async (done) => {
    fetchMock.get('/api/count', { body: {}, status: 400 })

    const spy: any = { dispatch: null }
    spyOn(spy, 'dispatch')
    const actions = new ActionDispatcher(spy.dispatch)
    await actions.asyncIncrement()
    expect(spy.dispatch.calls.count()).toEqual(2)
    expect(spy.dispatch.calls.argsFor(0)[0]).toEqual(fetchRequestStart())
    expect(spy.dispatch.calls.argsFor(1)[0]).toEqual(fetchRequestFinish())
    done()
  })
})
