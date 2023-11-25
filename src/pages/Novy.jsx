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
import dayjs from 'dayjs';


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
            pacientId: '',
            kodPojistovna: '',
            diagnoza: '',
            onkologickyKod: '',
            pomerNadorovychBunek: '',
            //idBiopsie
            prijemLMP: dayjs(),
            uzavreniLMP: dayjs()
        })
    const [files, setFiles] = useState([])



    const renderFileList = () => (
        <TableContainer sx={{ width: '30vw' }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell width='300'><b>Soubor</b></TableCell>
                        <TableCell><b>Typ</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...files].map((f, i) => (
                        <TableRow>
                            <TableCell width='300'>{f.file.name}</TableCell>
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
                                        }}

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

    const submit = (e) => {
        e.preventDefault();

        const data = new FormData();

        [...files].forEach((file, i) => {
            data.append(`file-${i}`, file.file, file.file.name)
            data.append(`file-${i}-template`, file.template)
        })

        data.append('pacientId', patientRecord.pacientId)
        data.append('kodPojistovna', patientRecord.kodPojistovna)
        data.append('diagnoza', patientRecord.diagnoza)
        data.append('onkologickyKod', patientRecord.onkologickyKod)
        data.append('pomerNadorovychBunek', patientRecord.pomerNadorovychBunek)
        data.append('idBiopsie', patientRecord.idBiopsie)
        data.append('prijemLMP', patientRecord.prijemLMP.format("MM/DD/YYYY"))
        data.append('uzavreniLMP', patientRecord.uzavreniLMP.format("MM/DD/YYYY"))

        axios.post('patientRecord/create', data)
            .catch(ex => {
                console.log(ex)
            })

    }

    return (
        <Box sx={{ m: 2, mt: 8 }}>
            <Box component="form" onSubmit={submit}>
                <Grid container spacing={1} sx={{ width: '60vw' }}>
                    <Grid item sm={6}>
                        <InputText
                            label="ID pacienta"
                            value={patientRecord.pacientId}
                            onChange={(event) => {
                                setPatientRecord((oldData) => ({ ...oldData, pacientId: event.target.value }))
                            }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="Kód pojišťovny"
                            value={patientRecord.kodPojistovna}
                            onChange={(event) => {
                                setPatientRecord((oldData) => ({ ...oldData, kodPojistovna: event.target.value }))
                            }}
                            inputProps={{
                                inputMode: "numeric",
                            }}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <InputText
                            label="Diagnóza"
                            value={patientRecord.diagnoza}
                            onChange={(event) => {
                                setPatientRecord((oldData) => ({ ...oldData, diagnoza: event.target.value }))
                            }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="Onkologický kód"
                            value={patientRecord.onkologickyKod}
                            onChange={(event) => {
                                setPatientRecord((oldData) => ({ ...oldData, onkologickyKod: event.target.value }))
                            }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputText
                            label="% nádorových buněk"
                            value={patientRecord.pomerNadorovychBunek}
                            onChange={(event) => {
                                setPatientRecord((oldData) => ({ ...oldData, pomerNadorovychBunek: event.target.value }))
                            }}
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9]*"
                            }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputDate
                            label="Příjem LMP"
                            value={patientRecord.prijemLMP}
                            onChange={
                                (newValue) => {
                                    setPatientRecord((oldData) => ({ ...oldData, prijemLMP: newValue }))
                                }}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <InputDate
                            label="Uzavření LMP"
                            value={patientRecord.uzavreniLMP}
                            onChange={
                                (newValue) => {
                                    setPatientRecord((oldData) => ({ ...oldData, uzavreniLMP: newValue }))
                                }}
                        />
                    </Grid>
                </Grid>

                <Input
                    type="file"
                    accept="docs/*"
                    sx={{ m: 2, mt: 3 }}
                    onChange={(e) => setFiles([...e.target.files].map((f) => { return { file: f, template: 1 } }))}
                    inputProps={{ multiple: true }}
                    disableUnderline={true}
                />

                {renderFileList()}


                <Button type='submit'>
                    Uložit
                </Button>
            </Box>
        </Box>
    )
}

export default Novy