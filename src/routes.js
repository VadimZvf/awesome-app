import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wallet from 'chunk-wallet';
import DefaultLayout from './layouts';
import { Login, ensure as onlyAuth } from './features/auth';
import NotFound from './features/not-found';

export default function () {
    return [
        <Route path="login" component={DefaultLayout}>
            <IndexRoute component={Login} />
        </Route>,
        <Route path="/" component={onlyAuth(DefaultLayout, { redirectTo: '/login' })}>
            <Route path="wallet">
                <IndexRoute component={Wallet} />
            </Route>
        </Route>,
        <Route path="*" component={DefaultLayout}>
            <IndexRoute component={NotFound} status={404} />
        </Route>
    ];
}
