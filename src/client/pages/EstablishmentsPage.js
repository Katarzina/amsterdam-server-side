import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEstablishments } from '../action';
import {stateSelector, currentSelector} from '../reducers/establishment'
//import { Helmet } from 'react-helmet';

class EstablishmentsList extends Component {

    componentDidMount() {
        //this.props.fetchEstablishments();
    }

    render() {
        const {establishmentSelect = []} = this.props.establishment;

        return (
            <div>
                Here's a big list of users:
                <ul>
                    { establishmentSelect.map( (restaurant, index) => <li key={restaurant.trcid + index}>{restaurant.title}</li>) }
                </ul>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchEstablishments());
    //console.log('i am cool')
}

function mapStateToProps(state) {
    return {  establishment: stateSelector(state),
        establishmentSelect: currentSelector(state) };
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchEstablishments})(EstablishmentsList)
}




