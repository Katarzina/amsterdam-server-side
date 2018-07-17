import React from 'react';
//import App from './App';
import Home from './components/Home'
import {Route} from 'react-router-dom'
/*import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';*/
export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
        </div>

    )
}