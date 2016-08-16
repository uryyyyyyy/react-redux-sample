import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import Root from "./Root";
import NotFound from "./NotFound";
import counterRoot from "./counter/Root";
import {Provider} from "react-redux";
import store from "./Store";
import {Paths} from "./Models";
import {IMessageJson} from "./counter/Models";
import {getRequest} from "./utils/HttpClient";

function failCB(msg: IMessageJson):void {}

function successCB(val: any):void {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={Root} >
                    <Route path={Paths.COUNTER} component={counterRoot} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        </Provider>,
        document.getElementById('app')
    );
}

getRequest<any>("authCheck", successCB, failCB);