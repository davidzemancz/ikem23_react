import * as React from 'react';
import 'dayjs/locale/cs';
import { TextField, Button, Autocomplete, Box, Link } from "@mui/material";



const InputAutocomplete = (props) => {
    return(
        <Autocomplete
        size={props.size}
        sx={{ p: 1, pl: 2, border: '1px solid', borderRadius: 2}}
        freeSolo
        autoSelect
        style={{ minWidth: '100px' }}
        selectOnFocus
        options={props.options}
        inputValue={props.inputValue}
        value={props.value}
        onInputChange={props.onInputChange}
        onChange={props.onChange}
        renderInput={(params) => <TextField {...params} variant="standard" InputProps={{ ...params.InputProps, disableUnderline: true }} InputLabelProps={{ shrink: true, style: {fontSize: 19}}} sx={{ backgroundColor: "textfield.search" }} label={props.label} />} />
    
    )
  }

export default InputAutocomplete