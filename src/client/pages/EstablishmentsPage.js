import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEstablishments } from '../action';
//import { Helmet } from 'react-helmet';

class EstablishmentsList extends Component {

    componentDidMount() {
        this.props.fetchEstablishments();
    }

    render() {
        const {users = []} = this.props.users;

        return (
            <div>
                Here's a big list of users:
                <ul>
                    { users.map( (user, index) => <li key={user.trcid + index}>{user.title}</li>) }
                </ul>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchEstablishments());
    //console.log('i am cool')
}

/*export { loadData };
export default connect(((state) => ({
        users: state.users
    }), {fetchEstablishments}))(EstablishmentsList);*/

function mapStateToProps(state) {
    return { users: state.users };
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchEstablishments})(EstablishmentsList)
}




