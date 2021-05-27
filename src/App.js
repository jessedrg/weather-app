import React from 'react'
import  { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather.component';
import 'weather-icons/css/weather-icons.css'
import Form from './components/Form.component'


function App() {
  
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('')
  const [celcius,setCelcius] = useState('')
  const [icon,setIcon] = useState(undefined)
  const [main,setMain] = useState(undefined)
  const[tempMax,setTempMax] = useState(undefined)
  const[tempMin,setTempMin] = useState(undefined)
  const [description,setDescription] = useState('')
  const [background,setBackground] = useState('')
  const [type,setType] = useState('')
  const [state,setState] = useState(false)
  
  const [error,setError] = useState(false)
  //Api call
  const API_key = '3113f51e3e6a0d26719a22961098a64b'
 
  
  const program = (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    
    
    async function fetchData() {
      
       // You can await here
       if(city&&country){
       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
       const result = await response.json()
       console.log(result)
       const calCelcius = (temp)=>{
        let cell = Math.floor(temp-273.15)
        return cell
    
      }
      const weatherIcon = {
        Thunderstorm:'wi-thunderstorm',
        Drizzle:'wi-sleet',
        Rain:'wi-storm-showers',
        Snow:'wi-snow',
        Atmosphere:'wi-fog',
        Clear:'wi-day-sunny',
        Clouds:'wi-day-fog'

      }

      setCity(`${result.name},${result.sys.country}`)
      
      setCelcius(calCelcius(result.main.temp))
      setTempMax(calCelcius(result.main.temp_max))
      setTempMin(calCelcius(result.main.temp_min))
      setIcon(weatherIcon.Thunderstorm)
      setDescription(result.weather[0].description)
      
      
  const getWeatherIcon = (icons,rangeID)=>{
    switch(true){
      case rangeID>= 200 && rangeID<=232:
        setIcon(weatherIcon.Thunderstorm);
        setBackground('thunderstorm')
        setState(true)
        
        break;
      case rangeID>= 300 && rangeID<=321:
        setIcon(weatherIcon.Drizzle);
        setBackground('drizzle')
        setState(true)
        
        break;
      case rangeID>= 500 && rangeID<=531:
        setIcon(weatherIcon.Rain);
        setBackground('rain')
        setState(true)
        
        break;
      case rangeID>= 701 && rangeID<=781:
        setIcon(weatherIcon.Atmosphere);
        setBackground('thunderstorm')
        setState(true)
        
        break;
      case rangeID>= 801 && rangeID<=804:
        setIcon(weatherIcon.Clouds);
        setBackground('clouds')
        setState(true)
        
        break;
      case rangeID === 800:
      setIcon(weatherIcon.Clear);
        setBackground('clear')
        setState(true)
        
        break;
      default:
        setIcon(weatherIcon.Clouds)
        setBackground('clouds')
        setState(true)
        
    }
    
    }
    getWeatherIcon(weatherIcon,result.weather[0].id)
    
   
  }else{
    setError(true)
  }
   

    }
  fetchData() 
    
    
  };
  
 
  return (
    <div className={state ?`${background}` : 'backgroundDefault'} >
      <div className='containing'>
      <div className='form'>
      <Form loadWeather={program} error={error} />
      </div>
      <div className='weather'>
      <Weather city={city} country={country} temp_celcius={celcius} temp_max={tempMax} temp_min={tempMin} description={description} weatherIcon={icon} state={state}  />
      </div>
    </div>
    </div>
  );
}

export default App;
