import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/routing';
import * as serviceWorker from './serviceWorker';
import store from './app/redux';
import history from './app/routing/history';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Router history={history} />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
