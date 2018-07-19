import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
/*import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';*/

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    //console.log(matchRoutes(Routes, req.path))
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })
    console.log(promises);
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
} )

app.listen(3000, () => console.log('listen on port 3000'))