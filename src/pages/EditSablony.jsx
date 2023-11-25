import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import InputText from '../components/InputText';

const columns = [
    { field: 'data', headerName: 'Datová položka', width: 180, editable: false, },
    { field: 'colName', headerName: 'Název sloupce', width: 180, editable: true, },
    { field: 'colNumber', headerName: 'Písmeno sloupce', width: 180, editable: true, },
]

const rows = [
    { id: 0, data: 'David', colName: 'hehe', colNumber: 'lol'}
    
    ]


const EditSablony = () => {
    return(
        <Box sx={{m:2, mt:8}} style={{width:'100%', height:'100%'}}>
            <InputText 
                label='Název šablony'
            />
            <InputText 
                label='Popis'
            />
             <Box style={{width:'100%', height:'100%'}}>
            <DataGrid rows={rows} columns={columns}/>
        </Box>
        </Box>
    )
}

export default EditSablony