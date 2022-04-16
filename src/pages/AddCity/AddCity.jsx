import React from 'react'
import "./AddCity.css"
export const AddCity = () => {
  return (
    <div className='add-city'>
        <input type="text"  placeholder='country'/><br />
        <input type="number" placeholder='population' /><br />
        <button>submit</button>
    </div>
  )
}
