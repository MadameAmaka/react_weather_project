import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null)
    let[city, setCity]=useState(null);
    
    function displayForecast(response){
       setForecast(response.data.daily);
       setCity (response.data.city);
       setLoaded(true);

    }


    if (loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">
                            Sat
                        </div>
                        <img src={props.data.icon}alt={props.data.description} className="WeatherForecast-icon"/>
                        <div className="WeatherForecast-temperature"> 
                            <span className="WeatherForecast-temperature-max">{Math.round(forecast[0].temperature.maximum)}°</span>
                            <span className="WeatherForecast-temperature-min">{Math.round(forecast[0].temperature.minimum)}°°</span>
                            
                        </div>
    
    
                    </div>
    
                </div>
    
            </div>
        );
     
    } else{
        let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(displayForecast);

        return null;
    }}