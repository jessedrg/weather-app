import React from 'react'
import './weather.css'


const Weather  = (props) => {
    const minMax = (min,max)=>{
        
        if(min&&max){
            return(
            <div className='minmax'>
              <h3>
                <span>{min}&deg;</span>
              </h3>
              <h3>
                <span>{max}&deg;</span>
              </h3>
            </div>)
            }
        
    }
    return (
        <div class='bodyBox'>
        <div>
            <div className={props.state ? 'cards' : null}>
                <h1>{props.city}</h1>
                <h3 className="py-4">
                    <i className={`wi ${props.weatherIcon} `}/>
                </h3>
                {props.temp_celcius?(<h1>{props.temp_celcius}&deg;</h1>):null}
                {/*Display the minMax temp */}
                {minMax(props.temp_min,props.temp_max)}
                <h4>{props.description}</h4>
            </div>
            
        </div>
        </div>
    )

}

export default Weather
