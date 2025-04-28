import React from "react";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}`;
    }

    function day(){
        let date = new Date(props.data.time*1000);
        let day = date.getDay();
        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"];

        return days[day];
    }


    return(
        <div>
             <div className="forecast-day">
                        {day()}
                        </div>
                        <img src={props.data.condition.icon_url} alt={props.data.condition.description} className="forecast-icon"/>

                        <div className="forecast-temperature"> 
                            <span className="forecast-temperature-max">{maxTemperature()}°</span>
                            <span className="forecast-temperature-min">{minTemperature()}°</span>
                            
                        </div>
        </div>

    )


}