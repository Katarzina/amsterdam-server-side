import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
/*import { renderRoutes } from 'react-router-config';
import axios from 'axios';*/
import Routes from './Routes';
import reducers from './reducer';

//import App from './App'

/*const axiosInstance = axios.create({
    baseURL: '/api'
});*/
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    ,document.querySelector('#root')
);
