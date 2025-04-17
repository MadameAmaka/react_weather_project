import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">

                <input type="Search" placeholder="Enter a city..." className="form-control"/> 
                </div>
                <div className="col-3">
                <input type="Submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
            </form>
            <h1> New York</h1>
            <ul>
                <li> Wednesday</li>
                <li>Mostly Cloudy</li>
            </ul>
                <div className="row">
                    <div className="col-6">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
                        6°C

                    </div>
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
    )
}