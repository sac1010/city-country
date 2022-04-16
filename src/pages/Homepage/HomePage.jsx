import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./HomePage.css"

export const HomePage = () => {
  const [cities, setCities] = useState([])
  useEffect(()=>{
    getCities()
  },[])

  const handleDelete = ()=>{

  }

  const handleEdit = ()=>{
      
  }

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
                    <>
                    <tr>
                    <td>{el.country}</td>
                    <td>{el.city}</td>
                    <td>{el.population}</td>
                    <td><button onClick={handleEdit}>edit</button></td>
                    <td><button onClick={handleDelete}>delete</button></td>
                </tr>
                </>              
                )
            })}

            
            
        </table>
           <Link to="/add-country"><button >add country</button></Link> 
            <Link to="/add-city"><button>add city</button></Link>

    </div>
  )
}
