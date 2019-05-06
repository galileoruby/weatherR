import React from 'react';


const WeatherExtraInfo = ({ humidity, wind }) => {


    return (
        <div className="weatherExtraInfoCont">
            <span className="extraInfoText"  >
                {`Humedad: ${humidity} °`}
            </span>

            <span className="extraInfoText">
                {`Vientos: ${wind}`}
            </span>
        </div>

    );

};

export default WeatherExtraInfo;