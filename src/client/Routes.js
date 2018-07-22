import React from 'react';
import AppRoutes from './AppRoutes';
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';
import EstablishmentPage from './pages/EstablishmentsPage';
import EventsPage from './pages/EventsPage';
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
                path: '/establishment',
            },
            {
                ...EventsPage,
                path: '/events'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];