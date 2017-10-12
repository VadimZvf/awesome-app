import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';
import routes from './routes';

render(
    <Provider store={store}>
        <Router history={history} routes={routes()} />
    </Provider>,
    document.getElementById('main')
);
