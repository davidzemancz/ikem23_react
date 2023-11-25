import * as React from 'react';
import 'dayjs/locale/cs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const InputDate = (props) => {
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="cs">
        <Box sx={{ p: 1, pl: 2, border: '1px solid', borderRadius: 2 }}>
        <DatePicker label={props.label}  
          value={props.value}
          defaultValue={dayjs()}
          onChange={props.onChange}
          slotProps={{ textField: { size:"small", fullWidth: true, variant:'standard', InputProps:{disableUnderline: true}, InputLabelProps:{ shrink: true, style: {fontSize: 19} }, sx:{backgroundColor:"textfield.search"} } }}
           />
           </Box>
      </LocalizationProvider>
    )
  }

export default InputDate