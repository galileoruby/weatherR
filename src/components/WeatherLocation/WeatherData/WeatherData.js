import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import WeatherLocation from './WeatherLocation';


import {
    SUN,
   
} from './../../../constant/weathers';



const WeatherData = ({data: {temperature, weatherState,humidity,wind}}) => (

    // const {temperature, weatherState,humidity,wind}= data;

        <div className="weatherDataCont" >
                <WeatherTemperature 
                    temperature={temperature} 
                    weatherState={weatherState} 
                    />

                <WeatherExtraInfo humidity={humidity} wind={wind} />

        </div>
        );
        


export default WeatherData;