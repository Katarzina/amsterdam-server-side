import express from 'express'
import renderer from './helpers/renderer';
/*import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';*/

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(renderer(req));
} )

app.listen(3000, () => console.log('listen on port 3000'))