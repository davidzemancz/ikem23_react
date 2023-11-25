import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import { GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons, } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

  function EditToolbar(props) {
  
    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />}>
          Nová šablona
        </Button>
      </GridToolbarContainer>
    );
  }
const Sablony = () => {
  const [rows, setRows] = useState([])

  const columns = [
    { field: 'name', headerName: 'Název', width: 200 },
    { field: 'description', headerName: 'Popis', width: 250},
    {
      field: " ",
      sortable: false,
      width: 80,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
          >
            <EditIcon></EditIcon>
          </IconButton>
        );
      }
    }]

  const onButtonClick = (e, row) => {
    e.stopPropagation();
    console.log(row);
  };

    useEffect (() =>{
        axios.get('/ImportTemplate', { params: {} })
        .then(res => {
            setRows(res.data)
        })
        .catch(ex => {
            console.log(ex)
        })
    },[])

    return(
        <Box sx={{m:2, mt:8}} style={{width:'100%', height:'100%'}}>
          <Box style={{width:'100%', height:'80vh'}}>
            <DataGrid rows={rows} columns={columns} slots={{
          toolbar: EditToolbar,
        }}/>
        </Box>
        </Box>
    )
}

export default Sablony


