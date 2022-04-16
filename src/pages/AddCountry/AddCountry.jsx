import axios from "axios";
import React, { useState } from "react";
import "./AddCountry.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const AddCountry = () => {
  const [country, setCountry] = useState();
  const handleSubmit = () => {
    axios.post("http://localhost:3005/countries", { country });
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
