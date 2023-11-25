import * as React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import InputText from '../components/InputText';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const columns = [
    { field: 'id', headerName: 'Datová položka', width: 180, editable: false, },
    { field: 'excelColumnHeader', headerName: 'Název sloupce', width: 180, editable: true, },
    { field: 'excelColumnLetter', headerName: 'Písmeno sloupce', width: 180, editable: true, },
]


const EditSablony = () => {

    const location = useLocation();

    const [template, setTemplate] = useState({ id: 0, name: '', description: '', sheetNumber: 1 })

    const [rows, setRows] = useState([])

    useEffect (() =>{
        location?.state ?
        axios.get(`/ImportTemplate/${location.state.templateData.id}`, { params: {id: location.state.templateData.id} })
        .then(res => {
            console.log(res.data)
            setRows(res.data.columnMapping)
            setTemplate((oldData) => ({...oldData, id: location.state.templateData.id, 
                name: location.state.templateData.name, 
                description: location.state.templateData.description,
                sheetNumber: location.state.templateData.sheetNumber, }))
            
        })
        .catch(ex => {
            console.log(ex)
        }) :
        axios.get('/ImportTemplate/columns', { params: {} })
        .then(res => {
            setRows(res.data)
        })
        .catch(ex => {
            console.log(ex)
        })
    },[])

    const handleSubmit = (event) =>{
        let templateData = template.id != 0 ? 
            { id: template.id, name: template.name, description: template.description, sheetNumber: template.sheetNumber, columnMapping: rows} :
            { name: template.name, description: template.description, sheetNumber: template.sheetNumber, columnMapping: rows}
        
        console.log(template.id)
        // console.log(templateData)
        axios.post('/ImportTemplate', templateData )
            .catch(ex => {
                console.log(ex)
            });
    }

    return(
        <Box sx={{m:2, mt:8, display: 'flex', flexDirection:'row'}} style={{width:'100%', height:'100%'}}>
            
            <Box sx={{width: '30vw', mr: 2}}>
                <Box sx={{mb:2}}>
            <InputText 
                required
                label='Název šablony'
                value={template.name}
                onChange={(event) => {
                    setTemplate((oldData) => ({...oldData, name: event.target.value}))
                  }}
            />
            </Box>
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