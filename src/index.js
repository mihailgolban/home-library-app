import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store";
import {Provider} from 'react-redux';
import Api from "./Api";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./store";

Api.initialize();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
