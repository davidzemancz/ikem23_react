import * as React from 'react';
import 'dayjs/locale/cs';
import {TextField, Box} from "@mui/material";

const InputText = (props) => {
    return (
        <Box sx={{  pl: 1, pt:1, border: '1px solid', borderRadius: 2 }}>
            <TextField
                required={props.required}
                multiline={props.multiline}
                variant="standard"
                InputProps={{
                    disableUnderline: true,
                }}
                inputProps={props.inputProps}
                InputLabelProps={{ shrink: true, style: { fontSize: 19 } }}
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                sx={{ width: '100%' }}
            />
        </Box>
    )
}

export default InputText