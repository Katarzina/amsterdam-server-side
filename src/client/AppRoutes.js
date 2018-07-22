import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchEstablishments, fetchEvents  } from './action';

const AppRoutes = ({ route }) => {
    return (
        <div>
            <Header />
            <div>{renderRoutes(route.routes)}</div>
        </div>
    );
};

export default {
    component: AppRoutes,
    loadData: ({ dispatch }) => dispatch(fetchEstablishments()),
};