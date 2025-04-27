import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css"

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
            <div className="row">
                <div className="col-6">
                    <h1> {props.data.city}</h1> <ul>
                    <li> <FormattedDate date={props.data.date}/>

                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                    
                    <li>
                        Humidity: <strong>
                        {props.data.humidity}%</strong>
                    </li>
                    
                    <li>
                        Wind:<strong>{props.data.wind} mph</strong>
                        </li>
                </ul>

                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-8">
                    <div className="temperature-container d-flex justify-content-end">
                        <img src={props.data.icon}alt={props.data.description} className="float-left"/>  <WeatherTemperature celsius={props.data.temperature}/>
                    </div>
                </div>
            
        </div>
        </div>

    );
}