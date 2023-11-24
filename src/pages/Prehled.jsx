import * as React from 'react';
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useMovieData } from '@mui/x-data-grid-generator';
import { Box } from '@mui/material';
import RowGroupingBasicExample from '../GridPro';

const Prehled = () => {
    return(
        <Box sx={{m:2, mt:8, height:'80vh'}}>
            <RowGroupingBasicExample></RowGroupingBasicExample>
        </Box>
    )
}

export default Prehled