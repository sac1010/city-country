import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import "./Rows.css"
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

export const Rows = ({el}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (el) => {
    setEdited(el)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3005/cities/${id}`)
  };

  const handleEdit = (e) => {
    setEdited({
      ...setEdited,
      [e.target.label]:e.target.value
    })
  };

  const edit = (id)=>{
    axios.patch(`http://localhost:3005/cities/${id}`, edited)
  }

  const[edited, setEdited] = useState({
    city: "",
    country: "",
    population: 0
  })
  return (
    
      <StyledTableRow>
        <StyledTableCell>{el.country}</StyledTableCell>
        <StyledTableCell>{el.city}</StyledTableCell>
        <StyledTableCell>{el.population}</StyledTableCell>
        <StyledTableCell>
          <Button onClick={()=>{handleOpen(el)}} variant="text">
            Edit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit City
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="add-city">
                  <TextField
                    value={edited.country}
                    id="standard-basic"
                    label="country"
                    variant="standard"
                    onChange={(e)=>{handleEdit(e)}}
                  />
                  <TextField
                    value={edited.city}
                    id="standard-basic"
                    label="city"
                    variant="standard"
                    onChange={(e)=>{handleEdit(e)}}
                  />
                  <TextField
                    value={edited.population}
                    id="standard-basic"
                    label="population"
                    variant="standard"
                    onChange={(e)=>{handleEdit(e)}}
                  />

                  <Button
                    className="btn"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      edit(el.id);
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
          <Button
            onClick={() => {
              handleDelete(el.id);
            }}
            variant="text"
          >
            Delete
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    
  );
};
