import React from 'react';
//import App from './App';
import HomePage from './pages/HomePage'
//import {Route} from 'react-router-dom'
import EstablishmentPage from './pages/EstablishmentsPage';
import Hi from './pages/Hi';
/*import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';*/
export default [
    {
        ... HomePage,
        path: '/',
        exact: true
    },
    {
        ...EstablishmentPage,
        path: '/users'
    }
];