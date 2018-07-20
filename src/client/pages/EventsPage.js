import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../action';
import {stateSelector, selectedEventSelector} from '../reducers/events'
//import { Helmet } from 'react-helmet';
import EventsList from '../containers/EventsList'

class EventsPage extends Component {

    render() {
        const {eventsSelect = []} = this.props.events;

        return (
            <div className="container-fluid" >
            <div className="row">
            <div className="col-md-12">
                <EventsList />
            </div>
            </div>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchEvents());
}

function mapStateToProps(state) {
    return {  events: stateSelector(state),
        eventsSelect: selectedEventSelector(state) };
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchEvents})(EventsPage)
}






