import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEstablishments } from '../action';
import {stateSelector, currentSelector} from '../reducers/establishment'
import { Helmet } from 'react-helmet';
import SearchBarTitle from '../containers/SearchBarTitle'
import SearchBarCity from '../containers/SearchBarCity'
import SortTable from '../containers/SortTable'
import EventsInfo from '../containers/EventsInfo'
import MapContainer from '../containers/MapContainer'

class EstablishmentsList extends Component {

    /*componentDidMount() {
        this.props.fetchEstablishments();
    }*/

    head() {
        return (
            <Helmet>
                <title>Establishment App Loaded</title>
                <description>Establishment App Loaded</description>
                <meta property="og:title" content="Establishment App" />
            </Helmet>
        );
    }

    render() {
        const {establishmentSelect = []} = this.props.establishment;

        return (
            <div className="container-fluid" >
                {this.head()}
            <div className="row">
            <div className="col-sm-12 col-md-6">
                <SearchBarTitle />
                <SearchBarCity />
                <SortTable />
            </div>
            <div className="col-sm-12 col-md-6">
                <MapContainer />
                <EventsInfo />
            </div>
            </div>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchEstablishments());
}

function mapStateToProps(state) {
    return {  establishment: stateSelector(state),
        establishmentSelect: currentSelector(state) };
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchEstablishments})(EstablishmentsList)
}




