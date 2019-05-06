import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/WeatherData';
 
 

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
          <WeatherLocation id="extendedor" />      
      </div>

    );
  }
}

export default App;
