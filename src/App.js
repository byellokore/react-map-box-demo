import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
require('dotenv').config()
class App extends Component {
  constructor(props){
    //get all from Component class
    super(props);
    this.state = {
      applicationName: 'TrafficMaps'
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Header appName={this.state.applicationName}/>
        <Container>
          <Map />
        </Container>
      </div>

    );
  }
}

export default App;
