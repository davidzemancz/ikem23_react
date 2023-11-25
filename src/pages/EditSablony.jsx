import * as React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import InputText from '../components/InputText';
import axios from 'axios';
import { useState, useEffect } from 'react';

const columns = [
    { field: 'id', headerName: 'Datová položka', width: 180, editable: false, },
    { field: 'excelColumnHeader', headerName: 'Název sloupce', width: 180, editable: true, },
    { field: 'excelColumnLetter', headerName: 'Písmeno sloupce', width: 180, editable: true, },
]


const EditSablony = () => {

    const [template, setTemplate] = useState({ name: '', description: '', sheetNumber: 1 })

    const [rows, setRows] = useState([])

    useEffect (() =>{
        axios.get('/ImportTemplate/columns', { params: {} })
        .then(res => {
            setRows(res.data)
        })
        .catch(ex => {
            console.log(ex)
        })
    },[])

    const handleSubmit = (event) =>{
        let templateData = { id: template.name,name: template.name, description: template.description, sheetNumber: template.sheetNumber, columnMapping: rows}
        // console.log(templateData)
        axios.post('/ImportTemplate', templateData )
            .catch(ex => {
                console.log(ex)
            });
    }

    return(
        <Box sx={{m:2, mt:8, display: 'flex', flexDirection:'row'}} style={{width:'100%', height:'100%'}}>
            
            <Box sx={{width: '30vw', mr: 2}}>
            <InputText 
                required
                label='Název šablony'
                value={template.name}
                onChange={(event) => {
                    setTemplate((oldData) => ({...oldData, name: event.target.value}))
                  }}
            />
            <InputText 
                label='Popis'
                value={template.description}
                onChange={(event) => {
                    setTemplate((oldData) => ({...oldData, description: event.target.value}))
                  }}
            />
            </Box>

             <Box style={{width:'100%', height:'70vh'}}>
            <DataGrid 
                editMode="row"
                rows={rows} columns={columns}
                processRowUpdate={(updatedRow, originalRow) =>
                setRows((oldRows) => oldRows.map(r => {
                    if(r.id === updatedRow.id) return updatedRow;
                    else return r;
                }))
                }
            />
            <Box sx={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
            <Button onClick={handleSubmit}>Uložit</Button>
            </Box>
        </Box>
            
        </Box>
    )
}

export default EditSablony