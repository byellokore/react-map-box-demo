import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';

export default class Map extends Component {
    constructor(props){
        super(props);

        this.state = {
            api_url: 'https://data.edmonton.ca/resource/87ck-293k.json',
            viewport: {
                width: 800,
                height: 400,
                zoom: 8,
                latitude:54.5444,
                longitude: -113.4989
            },
            data: null,
            token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
        };
    }

    componentDidMount(){
        const { data, api_url } = this.state;
        if (!data){
            fetch(api_url, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({ data: response }));
        }
    }

    render() {
        const { data } = this.state;
        return (
            <ReactMapGL
            mapboxApiAccessToken={this.state.token}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}>
            {data && data.map((coord,i) => (
                <Marker 
                key={i} 
                latitude={parseFloat(coord.location.latitude)} 
                longitude={parseFloat(coord.location.longitude)}>
                    <Pin />
                </Marker>
            ))}    

            </ReactMapGL>
        );
    }
}