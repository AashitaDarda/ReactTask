import React, { useEffect, useState } from 'react';
import '../style/input.css';
import axios from 'axios';
import CountriesData from '../countries'
import { Link } from 'react-router-dom';

function InputCard({setTemp, set_City, set_Country, setDescription, setWindSpeed, setHumidity}) {
  const [City, setCity] = useState('')
  const [Country, setCountry] = useState('')
  const [Countries, setCountries] = useState([]);

  useEffect (() => {
    setCountries(Object.keys(CountriesData))
  }, [])

    const HandleChangeCountry = (event) => {
    setCountry(event.target.value)
    setCity("")
    const CityDropDown = document.getElementById("CityDropDown")
    CityDropDown.value = "default"
    }

    const HandleChangeCity = (event) => {
        setCity(event.target.value)
    }

    //unique values only
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

  const CheckWeather = () =>{
    if (Country === "") {
        alert('Please Select Country 😀')
        return;
    }
    if (City === "") {
        alert('Please Select City 😀')
        return;
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&APPID=0193b5d33ca87ec43b479e3ac7667f48&units=metric&units=metric`).then((response) => {
        const result = response.data
        
        setTemp(result.main.temp)
        set_City(City)
        set_Country(Country)
        setDescription(result.weather[0].description)
        setWindSpeed(result.wind.speed)
        setHumidity(result.main.humidity)
    })
}

  return (
    <>
      <div className='app'>
        <div className='wrapper'>
            <h3 className=' m-2 heading'>Weather App Detecter</h3>
            <hr /><br /><br />
            <div className='country text-start'>
                <label className='mx-3'>Country: </label>
                <select 
                    defaultValue='default'
                    onChange={HandleChangeCountry}
                    id='CountryDropdown'>
                        <option value="default" key='default' disabled>
                                Select Country
                        </option>
                        {Countries.filter(onlyUnique).map((value) =>{
                            if(value === '') return null
                            return(
                                <option value={value} key={value}>{value}</option>
                            )
                        })}
                </select>
              
            </div>

            <div className='City text-start my-3'>
                <label className='mx-3'>City: </label>
                <select 
                    defaultValue='default'
                    onChange={HandleChangeCity}
                    id="CityDropDown"
                    disabled={Country === ''}>
                        <option value="default" key='default' disabled>
                                Select City
                        </option>
                        {CountriesData[Country].filter(onlyUnique).map((value)=>{
                            return(
                                <option value={value} key={value}>
                                    {value}
                                </option>
                            )
                        })}
                </select>
            </div>
          <div className='app_data text-center'> 
            <button className='btn btn-warning btn-lg location_searcher' onClick={CheckWeather}>
                <Link to = {City === '' ?'/city-weather':'/city-weather/result'}>
                    Check Weather 🌧️
                </Link>
            </button> 
          </div>
        </div>
      </div>
    </>
  );
}

export default InputCard;
