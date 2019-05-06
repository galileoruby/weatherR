import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
    STARS,

} from './../../../constant/weathers';

 const data={
     temperature: 31,
     weatherSun: STARS,
     humidity: 11,
     wind: '10 m/s'
 }


class WeatherLocation extends Component{


    render(){


        return (

  <div className="WeatherLocationCont">
        <Location city={"Guadalupe, nuevo León."}  ></Location>  
        <WeatherData data={data} / >
    </div>

        );



    }
  





}


export default WeatherLocation;