import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from './redux/config-store';
import './index.css';
import App from './pages/app';
import SignIn from './pages/sign-in';

ReactDOM.render(
    <Provider store={store}>

        <Router history={createBrowserHistory}>
            <Switch>
                <Route path="/my" component={App} />
                <Route path="/sign-in" component={SignIn} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
