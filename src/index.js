import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from './redux/config-store';
import './index.css';
import App from './pages/app';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import SignUpConfirm from './pages/sign-up-confirm';
import Info from './pages/info';

ReactDOM.render(
    <Provider store={store}>

        <Router history={createBrowserHistory}>
            <Switch>
                <Route path="/my" component={App} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-up-confirm" component={SignUpConfirm} />
                <Route path="/info" component={Info} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
