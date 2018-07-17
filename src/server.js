import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './client/store/index'
import App from './client/App'

module.exports = function render(initialState) {
    // Model the initial state
    //const store = configureStore(initialState)
    let content = renderToString(
            <App />
    );

    //const preloadedState = store.getState()

    //return {content, preloadedState};
}