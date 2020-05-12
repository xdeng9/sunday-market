import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import App from './app';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <AuthRoute exact path="/login" component={LoginContainer}/>
                <AuthRoute exact path="/signup" component={SignupContainer}/>
                <Route path='/' component={App} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;
