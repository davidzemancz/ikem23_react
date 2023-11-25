import * as React from 'react';
import { Box, Grid, Button} from '@mui/material';
import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import InputText from '../components/InputText';
import InputAutocomplete from '../components/InputAutocomplete';
import InputDate from '../components/InputDate';
import dayjs from 'dayjs';

const Import = () => {
    const [files, setFiles] = useState([])

    const renderFileList = () => (
        <TableContainer sx={{ width: '30vw' }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell width='200'><b>Soubor</b></TableCell>
                        <TableCell><b>Typ</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...files].map((f, i) => (
                        <TableRow>
                            <TableCell width='200'>{f.file.name}</TableCell>
                            <TableCell >
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={f.template}
                                        size="small"
                                        onChange={(v) => {
                                            console.log(v)
                                            setFiles((oldFiles) => oldFiles.map((f2, i2) => {
                                                if (i === i2) return { ...f2, template: v.target.value }
                                                else return f2
                                            }))
                                        }}>
                                            <MenuItem value={0}>---</MenuItem>
                                            {selectData.map((sd) => (
                                                <MenuItem id={sd.id} value={sd.id}>{sd.name}</MenuItem>
                                            ))}
                                        
                                    </Select>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
    const [selectData, setselectData] = useState([])

    useEffect (() =>{
        axios.get('/ImportTemplate', { params: {} })
        .then(res => {
            console.log(res.data)
            setselectData(res.data)
            
        })
        .catch(ex => {
            console.log(ex)
        })
    },[])

    const submit = (e) => {
        // e.preventDefault();

        const data = new FormData();

        [...files].forEach((file, i) => {
            data.append(`file-${i}`, file.file, file.file.name)
            data.append(`file-${i}-template`, file.template)
        })}

    
    return(
        <Box>
            <Box sx={{m:2, mt:8}} style={{width:'100%', height:'100%'}}>
                <Button containerElement='label' component="label" variant="outlined" sx={{ mb:2, borderRadius:2}}> 
                Nahrajte soubory            
                <input
                    type="file"
                    accept="docs/*"
                    hidden
                    multiple
                    // sx={{ m: 2, mt: 3 }}
                    onChange={(e) => setFiles([...e.target.files].map((f) => { return { file: f, template: 0 } }))}
                    // inputProps={{ multiple: true }}
                    // disableUnderline={true}
                />
                </Button>

                {files.length > 0 ? renderFileList() : <Box></Box>}


                </Box>
        </Box>
    )
}

export default Import