import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';

export default class Map extends Component {
    constructor(props){
        super(props);

        this.state = {
            viewport: {
                width: 800,
                height: 400,
                zoom: 8,
                latitude:-30.0305,
                longitude: -51.1210
            },
            token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
        }
    };

    render() {
        return (
            <ReactMapGL 
            mapboxApiAccessToken={this.state.token}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}>
            <Marker latitude={-30.0305} longitude={-51.1211}>
                <Pin />
            </Marker>
            </ReactMapGL>
        );
    }
}