import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import Root from "./Root";
import NotFound from "./NotFound";
import CounterRoot from "./counter/CounterRoot";
import ChatRoot from "./chat/ChatRoot";
import TodoListRoot from "./todo/TodoListRoot";
import {Provider} from "react-redux";
import store from "./Store";
import {Paths} from "./Models";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Root} >
                <Route path={Paths.COUNTER} component={CounterRoot} />
                <Route path={Paths.TODO} component={TodoListRoot} />
                <Route path={Paths.CHAT} component={ChatRoot} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
