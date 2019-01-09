import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Map from './components/Map';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config()
class App extends Component {
  constructor(props){
    //get all from Component class
    super(props);
    this.state = {
      applicationName: 'TrafficMaps',
      api_url: 'https://data.edmonton.ca/resource/87ck-293k.json',
      data: null
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  createFeatureCollection(data){
    let features = [];
    data.forEach(point => {
        features.push({
            "type":"Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    parseFloat(point.location.longitude),
                    parseFloat(point.location.latitude)
                ]
            },
            "properties": {
                "description": point.description,
                "details": point.details,
                "duration": point.duration,
                "impact": point.impact
            }
        })
    });

    return {
        "type": "FeatureCollection",
        "features": features
    }
}

  componentDidMount(){
    const { data, api_url } = this.state;
    if (!data){
        fetch(api_url, {method: 'GET'})
        .then(response => response.json())
        .then(response => this.createFeatureCollection(response))
        .then(response => this.setState({ data: response }));
    }
  }

  render() {
    return (
      <div className="App">
        <Header appName={this.state.applicationName}/>
        
        <Container>
          <Map data={this.state.data} />
        </Container>
      </div>

    );
  }
}

export default App;
