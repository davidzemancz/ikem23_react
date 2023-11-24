import * as React from 'react';
import { Box, TextField, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const InputText = (props) => {
    return(
        <Box sx={{m:1,p:1,pl:2, border:'1px solid', borderRadius:2}}>
        <TextField
            required
            variant="standard" 
            InputProps={{
                disableUnderline: true,
            }} 
            inputProps={props.inputProps}
            InputLabelProps={{ shrink: true, style: {fontSize: 19}}}
            label={props.label}
            sx={{width:'100%'}}
        />
        </Box>
    )
}

const rows = {}
const columns = {}

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
    return(
        <Box sx={{m:2, mt:8}}>
            <Box component="form" sx={{width:'60vw'}}>
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
            </Box>
        </Box>
    )
}

export default Novy