import React from 'react';
import WeatherIcons from 'react-weathericons';
import ProptTypes from 'prop-types';
import './styles.css';


const icons = {

    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy",
    stars: "stars"

};

const getWeatherIcon = weatherState => {

    const icon = icons[weatherState];


    const sizeIcon = "3x";

    if (weatherState)
        return <WeatherIcons className="wicon" name={weatherState} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;





};

const WeatherTemperature = ({ temperature, weatherState }) => (


    <div className="weatherTemperatureCont">

        {
            getWeatherIcon(weatherState)
        }

        <span className="temperature" > {`${temperature} °c `} </span>

    </div>


);


WeatherTemperature.proptTypes = {


    temperature: ProptTypes.element,
    // weatherState: ProptTypes.string.isRequired,

};



export default WeatherTemperature;