import * as React from 'react';
import styled from '@emotion/styled';

import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useMovieData } from '@mui/x-data-grid-generator';
import { Box, Select, MenuItem } from '@mui/material';
import RowGroupingBasicExample from '../GridPro';
import axios from 'axios';

const columns = [
    {
        field: " ",
        sortable: false,
        width: 100,
        renderCell: (params) => {
          return (
            <Box sx={{p:1}}>
            <Select>
                <MenuItem value={0}>---</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={2}>3</MenuItem>
            </Select>
            </Box>
          );
        }
      },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'idBiopsie', headerName: 'ID biopsie', width: 150 },
    { field: 'projekt', headerName: 'Projekt', width: 150 },
    { field: 'diagnoza', headerName: 'Diagnóza', width: 150 },
    { field: 'onkologickyKod', headerName: 'Onkologický kód', width: 150 },
    { field: 'kodPojistovna', headerName: 'Kód pojišťovna', width: 150 },
    { field: 'prijemLMP', headerName: 'Příjem LMP', width: 150 },
    { field: 'uzavreniLMP', headerName: 'Uzavření LMP', width: 150 },
    { field: 'dobaOdezvy', headerName: 'Doba odezvy', width: 150 },
    { field: 'patientId', headerName: 'Patient ID', width: 150 },
    { field: 'iGVKontrola', headerName: 'IGV kontrola - iniciály', width: 200 },
    { field: 'medeaZapis', headerName: 'Medea zápis - iniciály', width: 200 },
    { field: 'sekvenator', headerName: 'Sekvenátor', width: 150 },
    { field: 'panelGenu', headerName: 'Panel genů', width: 150 },
    { field: 'pomerNadorovychBunek', headerName: '% nádorových buněk', width: 200 },
    { field: 'dNAKoncPo1PCR', headerName: 'DNA konc. po 1.PCR', width: 200 },
    { field: 'dNAPrumernePokryti', headerName: 'DNA průměrné pokrytí', width: 200 },
    { field: 'dNATMB', headerName: 'DNA TMB', width: 150 },
    { field: 'dNAMSI', headerName: 'DNA MSI', width: 150 },
    { field: 'hRD', headerName: 'HRD', width: 150 },
    { field: 'genomBuildPuvodni', headerName: 'Genom build - původní', width: 200 },
    { field: 'chromosome', headerName: 'Chromosome', width: 150 },
    { field: 'region', headerName: 'Region', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'reference', headerName: 'Reference', width: 150 },
    { field: 'allele', headerName: 'Allele', width: 150 },
    { field: 'length', headerName: 'Length', width: 150 },
    { field: 'count', headerName: 'Count', width: 150 },
    { field: 'coverage', headerName: 'Coverage', width: 150 },
    { field: 'frequency', headerName: 'Frequency', width: 150 },
    { field: 'forwardReverseBalance', headerName: 'Forward/reverse balance', width: 200 },
    { field: 'averageQuality', headerName: 'Average quality', width: 150 },
    { field: 'geneName', headerName: 'Gene name', width: 150 },
    { field: 'codingRegionChange', headerName: 'Coding region change', width: 200 },
    { field: 'aminoAcidChange', headerName: 'Amino acid change', width: 200 },
    { field: 'exonNumber', headerName: 'Exon Number', width: 150 },
    { field: 'typeOfMutation', headerName: 'Type of mutation', width: 150 },
  ];
  


const Prehled = () => {
    const [rows, setRows] = React.useState([])

    React.useEffect(() => {
        axios.get('PatientRecord')
        .then(res => {
            setRows(res.data)
        })
    }, [])


    return(
        <Box sx={{m:2, mt:8, height:'80vh'}}>
            <DataGridPremium columns={columns} rows={rows} />
        </Box>
    )
}

export default Prehled