import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchEstablishments, fetchEvents  } from './action';

const AppRoutes = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: AppRoutes,
    loadData: ({ dispatch }) => dispatch(fetchEstablishments(), fetchEvents()),
};