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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";


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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getCities();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3005/cities/${id}`)
  };

  const handleEdit = (id) => {
    axios.patch(`http://localhost:3005/cities/${id}`, {})
  };

  const getCities = () => {
    axios.get("http://localhost:3005/cities").then((res) => {
      setCities(res.data);
    });
  };
  return (
    <div className="table">
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
          {cities.map((el) => {
            return (
              <>
                <StyledTableRow>
                  <StyledTableCell>{el.country}</StyledTableCell>
                  <StyledTableCell>{el.city}</StyledTableCell>
                  <StyledTableCell>{el.population}</StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={handleOpen} variant="text">
                      Edit
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Edit City
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <div className="add-city">
                            <TextField
                            onChange={setEdited}
                              value={el.country}                 
                              id="standard-basic"
                              label="Country"
                              variant="standard"
                            />
                            <TextField
                            value={el.city}
                              id="standard-basic"
                              label="City"
                              variant="standard"
                            />
                            <TextField
                            value={el.population}
                              id="standard-basic"
                              label="population"
                              variant="standard"
                            />

                            <Button
                              className="btn"
                              variant="contained"
                              size="small"
                              onClick={()=>{
                                handleEdit(el.id)
                              }}
                            >
                              edit
                            </Button>
                          </div>
                        </Typography>
                      </Box>
                    </Modal>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button onClick={()=>{handleDelete(el.id)}} variant="text">
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
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
    </div>
  );
};
