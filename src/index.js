import express from 'express'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore'
/*import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';*/

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    res.send(renderer(req, store));
} )

app.listen(3000, () => console.log('listen on port 3000'))