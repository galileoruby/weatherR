import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
    STARS,
    CLOUDY,

} from './../../../constant/weathers';
import { resolve } from 'q';
import { debug } from 'util';

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


    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }


        return data;

    }

    handleUpdateClick = () => {


        fetch(apiWeather).then(resolve => {

            return resolve.json();
        }).then(datax => {

            const newWeather = this.getData(datax);
            this.setState({
                city: 'Linares Nuevo León. fierro pariente.',
                data: newWeather,



            });

            console.log(newWeather); 
            debugger;

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