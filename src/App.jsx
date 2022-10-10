import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WeatherCard from './components/WeatherCard';
import InputCard from './components/InputCard';

function App() {
  const [Temp, setTemp] = useState(0)
  const [City, set_City] = useState("")
  const [Country, set_Country] = useState('')
  const [Description, setDescription] = useState("")
  const [Wind_Speed, setWind_Speed] = useState(0)
  const [Humidity, setHumidity] = useState(0)
  return(
    <>
    
        <BrowserRouter>
            <Routes>
              <Route index path="/city-weather" 
                element = {<InputCard 
                            setTemp={setTemp} 
                            set_City={set_City}
                            set_Country={set_Country}
                            setDescription={setDescription}
                            setWindSpeed={setWind_Speed}  
                            setHumidity={setHumidity}        
                          />} 
              />
              <Route path="/city-weather/result" 
                      element = {<WeatherCard 
                                    Temp={Temp}
                                    City={City}
                                    Country={Country}
                                    Description={Description}
                                    WindSpeed={Wind_Speed}
                                    Humidity={Humidity}                
                                />} 
              />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
