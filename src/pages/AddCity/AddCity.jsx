import React from 'react'
import "./AddCity.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export const AddCity = () => {
  return (
    <>
    <h2>Add City</h2>
    <div className='add-city'>

        <TextField
        id="standard-basic"
        label="Country"
        variant="standard"
      />
              <TextField
        id="standard-basic"
        label="City"
        variant="standard"
      />
              <TextField
        id="standard-basic"
        label="population"
        variant="standard"
      />
        
        <Button className="btn"  variant="contained" size="small">
        Add 
      </Button>
    </div>
    </>
  )
}
