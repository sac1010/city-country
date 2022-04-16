import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./HomePage.css"

export const HomePage = () => {
  const [cities, setCities] = useState([])
  useEffect(()=>{
    getCities()
  },[])

  const getCities = ()=>{
      axios.get("http://localhost:3005/cities").then((res)=>{
          setCities(res.data)
      })
  }
  return (
    <div className='table'>
        <table>
            <tr>
                <td>Country</td>
                <td>City</td>
                <td>Population</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            {cities.map((el)=>{
                return(
                    <tr>
                    <td>{el.country}</td>
                    <td>{el.city}</td>
                    <td>{el.population}</td>
                    <td><button>edit</button></td>
                    <td><button>delete</button></td>
                </tr>              
                )
            })}
            
        </table>
    </div>
  )
}
