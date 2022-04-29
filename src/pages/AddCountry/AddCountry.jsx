import axios from "axios";
import React, { useState } from "react";
import "./AddCountry.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const AddCountry = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate()
  const handleSubmit = () => {
    axios.post("https://city-country101.herokuapp.com/countries", {country}).then(()=>{
      navigate("/")
    }).catch((err)=>{
      console.log(err)
      navigate("/")
    });
  };

  return (
    <div className="add-country">
      <TextField
        id="standard-basic"
        label="Country"
        variant="standard"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
   
      <Button className="btn" onClick={handleSubmit} variant="contained" size="small">
        Add 
      </Button>
    </div>
  );
};
