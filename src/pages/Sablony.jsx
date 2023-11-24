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
            <DataGrid rows={rows} columns={columns} slots={{
          toolbar: EditToolbar,
        }}/>
        </Box>
    )
}

export default Sablony


const rows = {}
const columns = [
    { field: 'id', headerName: 'Id', width: 180 },
    { field: 'name', headerName: 'Název', width: 180 },
    { field: 'description', headerName: 'Popis', width: 180},]
