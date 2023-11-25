import * as React from 'react';
import 'dayjs/locale/cs';
import {TextField, Box} from "@mui/material";

const InputText = (props) => {
    return (
        <Box sx={{ p: 1, pl: 2, border: '1px solid', borderRadius: 2 }}>
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

export default InputText