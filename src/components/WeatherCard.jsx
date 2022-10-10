import React from "react";
import {Link} from 'react-router-dom'

function WeatherCard({Temp, City, Country, Description, WindSpeed, Humidity }){
    return(
        <>
            <div className='app'>
                <div className='wrapper1'>
                    <h3 className=' m-2 heading'>Weather App Detecter</h3>
                    <hr /><br /><br />
                    <div className="Top">
                        <h1 className="mx-5">🌡️ {Temp} ℃</h1>
                        <h2 className="mx-5">🏠 {City},{Country}</h2>
                        <h2 className="mx-5">🌤️ {Description}</h2>
                    </div>
                    <div className="Bottom">
                        <h2 className="mx-5">💨 {WindSpeed} m/sec</h2>
                        <h2 className="mx-5">💦 {Humidity} %</h2>
                        <button className='BackButton btn btn-warning btn-lg'><Link to="/City-Weather">New Search</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeatherCard