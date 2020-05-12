import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <AuthRoute exact path="/login" />
                <Route path='/' component={App} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;
