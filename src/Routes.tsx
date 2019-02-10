import * as React from 'react'
import { Switch } from 'react-router'
import { Link, Route } from 'react-router-dom'
import Counter from './counter/Container'
import NotFound from './NotFound'
import { Home } from './home/Home'

export function Routes() {
  return (
    <div>
      <h1>React Redux sample</h1>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/counter/papaparam">Counter with param</Link>
      </li>
      <Switch>
        <Route exact={true} path="/counter" component={Counter} />
        <Route path="/counter/:myParams" component={Counter} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
