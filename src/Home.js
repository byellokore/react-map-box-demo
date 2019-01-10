import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Map from './components/Map';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
class Home extends Component {
  constructor(props){
    //get all from Component class
    super(props);
    this.state = {
      applicationName: 'TrafficMaps'
    }
  }

  componentDidMount() {
    const { startFetch, API: { data } } = this.props;
    if (!data) startFetch();
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }



  render() {
    const { data } = this.props.API;
    return (
      <div className="Home">
        <Header appName={this.state.applicationName}/>
        
        <Container>
          <Map data={data} />
        </Container>
      </div>

    );
  }
}

export default Home;
