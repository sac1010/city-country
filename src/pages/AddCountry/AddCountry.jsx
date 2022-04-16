import axios from 'axios'
import React, { useState } from 'react'
import "./AddCountry.css"
export const AddCountry = () => {
    const [country, setCountry]  = useState()
    const handleSubmit= ()=>{
        axios.post("http://localhost:3005/countries", {country})
    }

  return (
    <div className='add-country'>
        <input type="text" placeholder='country' onChange={(e)=>{
            setCountry(e.target.value)
        }} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
