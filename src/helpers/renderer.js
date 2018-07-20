import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'

export default (req, store, context) => {
const content = renderToString(
    <Provider store={store}>
    <StaticRouter location = {req.path} context={{}} >
        <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
    </Provider>
);

    const helmet = Helmet.renderStatic();

    return `
        <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
            <link rel="stylesheet" href="/assets/main.css">     
            <link rel="stylesheet" href="https://unpkg.com/react-select@1.2.1/dist/react-select.css">
        </head>
        <title>SSR React Redux applicaton</title>
        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src='bundle.js'></script>
        </body>
        </html>
    `
}
