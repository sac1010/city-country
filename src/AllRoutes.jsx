import {Routes, Route} from "react-router-dom"

import React from 'react'
import { HomePage } from "./pages/Homepage/HomePage"
import { AddCountry } from "./pages/AddCountry/AddCountry"
import { AddCity } from "./pages/AddCity/AddCity"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element= {<HomePage></HomePage>}></Route>
        <Route path="/add-country"  element= {<AddCountry></AddCountry>}></Route>
        <Route path="/add-city"  element= {<AddCity></AddCity>}></Route>
    </Routes>
  )
}
