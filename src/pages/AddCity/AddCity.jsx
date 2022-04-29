import React, { useState } from 'react'
import "./AddCity.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const AddCity = () => {
  const navigate = useNavigate()
  const [ cityData, setCityData] = useState({
    country:"",
    city:"",
    population:""
  })
  const handleChange = (e)=>{
    setCityData({
      ...cityData,
      [e.target.name] : e.target.value
    })
  }
  const addCity = ()=>{
    axios.post("https://city-country101.herokuapp.com/cities", cityData).then(()=>{
      navigate("/")
    })
  }
  return (
    <>
    <h2>Add City</h2>
    <div className='add-city'>

        <TextField
        id="standard-basic"
        label="Country"
        variant="standard"
        name='country'
        value={cityData.country}
        onChange={handleChange}
      />
              <TextField
        id="standard-basic"
        label="City"
        variant="standard"
        name='city'
        value={cityData.city}
        onChange={handleChange}
      />
              <TextField
        id="standard-basic"
        label="population"
        variant="standard"
        name='population'
        type="number"
        value={cityData.population}
        onChange={handleChange}
      />
        
        <Button className="btn"  variant="contained" size="small" onClick={addCity}>
        Add 
      </Button>
    </div>
    </>
  )
}
