import React from 'react'
import './form.css'

const Form = (props) => {
    return (
        
        <form onSubmit={props.loadWeather} className='intoit'>
            <div>{props.error ? error() : null}</div>
            <div className='container'>
            <div className='city'>
               <input type="text" className="form-control" name='city' autoComplete='off' placeholder='city'/>
            </div>
            <div className='country'>
               <input type="text" className="form-control" name='country' autoComplete='off' placeholder='country'/>
 
            </div>
            <div className='buttom'>
              <button className="warning">Get Weather</button>
            </div>
            </div>
        </form>
            
        
    )
    function error(){
        <div className='alertBox' role="alert">
            <h1>Please enter country and city</h1>
        </div>
    }
}

export default Form
