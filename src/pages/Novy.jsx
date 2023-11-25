import * as React from 'react';
import { Box, TextField, Grid, Button, Input, Autocomplete } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
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
import Paper from '@mui/material/Paper';

import InputText from '../components/InputText';
import InputAutocomplete from '../components/InputAutocomplete';
import InputDate from '../components/InputDate';


// const InputText = (props) => {
//     return (
//         <Box sx={{ p: 1, pl: 2, border: '1px solid', borderRadius: 2 }}>
//             <TextField
//             required
//                 variant="standard"
//                 InputProps={{
//                     disableUnderline: true,
//                 }}
//                 inputProps={props.inputProps}
//                 InputLabelProps={{ shrink: true, style: { fontSize: 19 } }}
//                 label={props.label}
//                 sx={{ width: '100%' }}
//             />
//         </Box>
//     )
// }

const rows = {}
const columns = [
    { field: 'sablona', headerName: 'Šablona', width: 180 },
    { field: 'file', headerName: 'Soubor', width: 180 },]

const Novy = () => {

    const [patientRecord, setPatientRecord] = useState(
        {
            patientId: undefined,
            kodPojistovna: undefined,
            diagnoza: undefined,
            onkologickyKod: undefined,
            pomerNadorovychBunek: undefined,
            //idBiopsie
            prijemLMP: undefined,
            uzavreniLMP: undefined
        })
    const [files, setFiles] = useState([])

   

    const renderFileList = () => (
        <TableContainer sx={{width:'30vw'}}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell width='300'>Soubor</TableCell>
                    <TableCell>Typ</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {[...files].map((f, i) => (
                    <TableRow>
                        <TableCell width='300'>{f.name}</TableCell>
                        <TableCell >
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={1}
                                    size="small"
                                >
                                    <MenuItem value={1}>Šablona 1</MenuItem>
                                    <MenuItem value={2}>420</MenuItem>
                                    <MenuItem value={3}>David</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    )

    const submit = (e) =>{
        e.preventDefault();
        

        const data = new FormData();

        [...files].forEach((file, i) => {
            data.append(`file-${i}`, file, file.name)
        })

        data.append('IdBiopsie', patientRecord.patientId)

        axios.post('patientRecord/create',data)
        .catch(ex => {
            console.log(ex)
        })

    }

    return (
        <Box sx={{ m: 2, mt: 8 }}>
            <Box component="form" onSubmit={submit}>
                <Grid container spacing={1} sx={{ width: '60vw'}}>
                    <Grid item sm={6}>
                        <InputText
                            label="ID pacienta"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="Kód pojišťovny"
                            inputProps={{
                                inputMode: "numeric",
                            }}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <InputText
                            label="Diagnóza"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="Onkologický kód"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="% nádorových buněk"
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9]*"
                            }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputDate
                            label="Příjem LMP"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputDate
                            label="Uzavření LMP"
                        />
                    </Grid>
                </Grid>

                <Input
                    type="file"
                    accept="docs/*"
                    sx={{m:2, mt:3}}                    
                    onChange={(e) => setFiles(e.target.files)}
                    inputProps={{ multiple: true }} />

                    {renderFileList()}
                

                <Button type='submit'>
                    Uložit
                </Button>
            </Box>
        </Box>
    )
}

export default Novy