import React from 'react';
//import App from './App';
import Home from './pages/Home'
//import {Route} from 'react-router-dom'
import EstablishmentPage, {loadData} from './pages/EstablishmentsList';
import Hi from './pages/Hi';
/*import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';*/
export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        loadData: loadData,
        component: EstablishmentPage,
        path: '/users'
    }
];