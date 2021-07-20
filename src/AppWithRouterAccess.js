import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Protected from './components/Protected';
import { oktaAuthConfig, oktaSignInConfig } from './utils/config';
import Header from './components/Header';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };

    const restoreOriginalUri = () => {
        history.push('/');
    };

    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <Header />
            <Switch>
                <Route path='/' exact={true} component={HomePage} />
                <SecureRoute path='/protected' component={Protected} />
                <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                <Route path='/login/callback' component={LoginCallback} />
            </Switch>
        </Security>
    );
};
export default AppWithRouterAccess;