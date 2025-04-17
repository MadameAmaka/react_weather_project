import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    const [ready, setReady]=useState(false);
    const [temperature, setTemperature]=useState(null);

    function handleResponse(response){
        setTemperature(response.data.temperature.current);
        setReady(true);

    }

    if (ready){
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
                    <li> Thursday</li>
                    <li>Sunny</li>
                </ul>
                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="clearfix">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="float-left"/>
                            <span className="temperature">{Math.round(temperature)}</span> <span className="unit">°C</span>
    
                        </div></div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    Precipitation:0%
                                </li>
                                <li>
                                    Humidity:44%
                                </li>
                                <li>
                                    Wind:7 mph
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