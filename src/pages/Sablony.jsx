import * as React from 'react';
import { Box } from '@mui/material';
import { GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons, } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
  } from '@mui/x-data-grid-generator';

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
    return(
        <Box sx={{m:2, mt:8}}>
            <DataGrid editMode="row" rows={rows} columns={columns} slots={{
          toolbar: EditToolbar,
        }}/>
        </Box>
    )
}

export default Sablony


const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      editable: true,
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
  ];
  
  const rows = [
    {
      id: 1,
      name: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      name: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      name: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      name: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      name: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ];