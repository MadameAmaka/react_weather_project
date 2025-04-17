import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    const [weatherData, setWeatherData]=useState({ready: false});

    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current, 
            wind:response.data.wind.speed, description:response.data.condition.description, 
            humidity:response.data.temperature.humidity,
            icon:response.data.condition.icon_url,
            date: "Thursday 17.51"
        })}

    if (weatherData.ready){
        return(
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
    
                    <input type="Search" placeholder="Enter a city..." className="form-control" autoFocus="on"/> 
                    </div>
                    <div className="col-3">
                    <input type="Submit" value="Search" className="btn btn-primary" w-100/>
                    </div>
                    </div>
                </form>
                <h1> New York</h1>
                <ul>
                    <li> {weatherData.date}

                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="clearfix">
                            <img src={weatherData.icon}alt={weatherData.description} className="float-left"/>
                            <span className="temperature">{Math.round(weatherData.temperature)}</span> <span className="unit">°C</span>
    
                        </div></div>
                        <div className="col-6">
                            <ul>
                               
                                <li>
                                    Humidity: {weatherData.humidity}%
                                </li>
                                <li>
                                    Wind:{weatherData.wind} mph
                                </li>
    
                            </ul>
                        </div>
    
                    </div>
                 </div>
        );

    } else{
       const apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb"
        let city = "New York"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
     
        return("Loading...")
    }

    
}