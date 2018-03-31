import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Counter from './counter/Container'
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
  , document.getElementById('app')
)