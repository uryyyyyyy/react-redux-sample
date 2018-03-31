import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Routes } from './Routes'
import { PRODUCTION } from './Variables'

const history = createBrowserHistory()

console.log(`this source is for ${PRODUCTION ? 'prod' : 'dev'}`)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
