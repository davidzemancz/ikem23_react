import * as React from 'react';
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useMovieData } from '@mui/x-data-grid-generator';
import { Box } from '@mui/material';

export default function RowGroupingBasicExample() {
  const data = useMovieData();
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: [],
      },
    },
  });

  return (
    <Box style={{height: '100%', width: '100%' }}>
      <DataGridPremium {...data} apiRef={apiRef} initialState={initialState} />
    </Box>
  );
}