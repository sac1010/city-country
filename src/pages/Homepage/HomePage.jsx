import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./HomePage.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
        <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>Populatiion</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>


        {cities.map((el)=>{
                return(
                    <>
                    <StyledTableRow>
                    <StyledTableCell>{el.country}</StyledTableCell>
                    <StyledTableCell>{el.city}</StyledTableCell>
                    <StyledTableCell>{el.population}</StyledTableCell>
                    <StyledTableCell><Button variant="text">Edit</Button></StyledTableCell>
                    <StyledTableCell><Button variant="text">Delete</Button></StyledTableCell>
                </StyledTableRow>
                </>              
                )
            })}


        </TableBody>
        </Table>

           <Link to="/add-country"><Button variant="text">Add Country</Button></Link> 
            <Link to="/add-city"><Button variant="text">Add City</Button></Link>

    </div>
  )
}
