import React = require('react');
import ReactDOM = require('react-dom');
import Counter from "./Counter";
import store from "./Store";
import {DispatchActions} from "./Models";

function render() {
    ReactDOM.render(
        <Counter value={store.getState()} actions={new DispatchActions(store.dispatch)} />,
        document.getElementById('app')
    )
}

render();
store.subscribe(render);