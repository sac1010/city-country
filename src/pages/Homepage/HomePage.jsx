import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Rows} from "../../components/Table/Rows";
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from "react-redux";
import { loadCities, loadSorted } from "../../redux/actions";
import Pagination from '@mui/material/Pagination';


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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



export const HomePage = () => {
  const [sort, setSort] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(loadCities(1))
  }, [dispatch]);

const {cities, loading, num} = useSelector((state)=>state.conCityReducer)
const handleChange = (e)=>{
setSort(e.target.value)
dispatch(loadSorted(sort))
}
const handlePageChange = (e)=>{
  dispatch(loadCities(e.target.textContent))
}

  // const getCities = () => {
  //   setLoading(true)
  //   axios.get("https://city-country101.herokuapp.com/cities").then((res) => {
  //     setCities(res.data);
  //   }).then(()=>{
  //     setLoading(false)
  //   });
  // };
  return (
    <div className="table">
      <div className="sort">
        population
      <select name="" id="" onChange={handleChange}>
        <option value="">--</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>

      </div>

      {!loading?"":<LinearProgress color="secondary" />}
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>Population</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cities.map((el) => {
            return (
              <>
                <Rows  el={el}/>
              </>
            );
          })}
        </TableBody>
      </Table>

      <Link to="/add-country">
        <Button variant="text">Add Country</Button>
      </Link>
      <Link to="/add-city">
        <Button variant="text">Add City</Button>
      </Link>
      <div className="pag">
      <Pagination 
      onChange={handlePageChange}
      count={Math.ceil(num/3)} color="secondary" />
      </div>
      
    </div>
  );
};
