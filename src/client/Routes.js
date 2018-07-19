import React from 'react';
import AppRoutes from './AppRoutes';
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';
//import {Route} from 'react-router-dom'
import EstablishmentPage from './pages/EstablishmentsPage';
import Hi from './pages/Hi';
/*import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';*/
export default [
    {
        ...AppRoutes,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...EstablishmentPage,
                path: '/establishment'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];