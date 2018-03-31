import * as React from 'react'
import { Switch } from 'react-router'
import {Link, Route} from 'react-router-dom'
import Counter from './counter/Container'
import NotFound from './NotFound'

export function Routes() {
  return (
    <div>
      <h1>React Redux sample</h1>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/counter' >Counter</Link></li>
      <li><Link to='/counter/papaparam' >Counter with param</Link></li>
      <Switch>
        <Route exact path='/counter' component={Counter} />
        <Route path='/counter/:myParams' component={Counter} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}