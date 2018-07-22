import React from 'react';
import { Marker } from 'react-google-maps';
import Icon from './Icon';

export default class MarkerMap extends React.Component {

    render(){
        return(
            <Marker
                position={this.props.location}
                icon={Icon}
            >
            </Marker>
        );
    }
}