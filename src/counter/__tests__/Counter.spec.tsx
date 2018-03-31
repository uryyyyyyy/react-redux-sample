import * as React from 'react'
import {Counter} from '../Counter'
import '../../__tests__/enzyme-util'
import {shallow} from 'enzyme'
import {CounterState} from '../module'
import {ActionDispatcher} from '../Container'

describe('Counter', () => {

  it('rendering', () => {
    const actions:any = {}
    const state: CounterState = {num: 1}
    const wrapper = shallow(<Counter value={state} actions={actions} />)
    expect(wrapper.find('p').at(0).prop('children')).toBe('score: 1')
  })

  it('click', () => {
    const actionSpy = new ActionDispatcher(null!)
    spyOn(actionSpy, 'increment')
    const state: CounterState = {num: 0}
    const wrapper = shallow(<Counter value={state} actions={actionSpy} />)
    wrapper.find('button').at(0).simulate('click')
    expect(actionSpy.increment).toHaveBeenCalledWith(3)
  })
})