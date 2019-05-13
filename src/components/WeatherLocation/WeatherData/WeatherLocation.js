import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
    STARS,
    WINDY,
    CLOUDY,

} from './../../../constant/weathers';

const data = {
    temperature: 31,
    weatherState: STARS,
    humidity: 11,
    wind: '10 m/s'
}


const data2 = {
    temperature: 24,
    weatherState: CLOUDY,
    humidity: -5,
    wind: '4.3 m/s'
}



let location = "Guadalupe, Nuevo León let";
let apiKey = "a197a39c3cb7762bb376053a2aae32e2";
let urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";

const apiWeather = `${urlBaseWeather}?q=${location}&appid=${apiKey}`;



class WeatherLocation extends Component {


    constructor() {

        super();

        this.state = {
            city: 'Oaxaca',
            data: data,
        };
    }

    handleUpdateClick = () => {


        fetch(apiWeather);

        this.setState({
            city: 'Linares Nuevo León.',
            data: data2,
        });


    }

    render() {

        const { city, data } = this.state;

        return (
            <div className="WeatherLocationCont">
                <Location city={this.state.city} />
                <WeatherData data={this.state.data} />
                <button onClick={this.handleUpdateClick} > actualizar </button>

            </div>
        );



    }






}


export default WeatherLocation;