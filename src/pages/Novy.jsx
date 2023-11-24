import * as React from 'react';
import { Box, TextField, Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

const InputText = (props) => {
    return (
        <Box sx={{ m: 1, p: 1, pl: 2, border: '1px solid', borderRadius: 2 }}>
            <TextField
            required
                variant="standard"
                InputProps={{
                    disableUnderline: true,
                }}
                inputProps={props.inputProps}
                InputLabelProps={{ shrink: true, style: { fontSize: 19 } }}
                label={props.label}
                sx={{ width: '100%' }}
            />
        </Box>
    )
}

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
        <table>
            <thead>
                <tr>
                    <th>Soubor</th>
                    <th>Typ</th>
                </tr>
            </thead>
            <tbody>
                {[...files].map((f, i) => (
                    <tr>
                        <td>{f.name}</td>
                        <td>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={10}
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
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
            <Box component="form" sx={{ width: '60vw' }} onSubmit={submit}>
                <Grid container spacing={2}>
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
                        <InputText
                            label="Příjem LMP"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="Uzavření LMP"
                        />
                    </Grid>
                </Grid>

                <input
                    type="file"
                    accept="docs/*"
                    multiple
                    onChange={(e) => setFiles(e.target.files)} />
                {
                    renderFileList()
                }

                <Button type='submit'>
                    Uložit
                </Button>
            </Box>
        </Box>
    )
}

export default Novy