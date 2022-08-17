import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 200, backgroundColor:'#F4F6F9'}}
            size={'small'}
            renderInput={(params) => <TextField {...params} label="Choose file" />}
        />
    );
}

const top100Films = [
    { label: 'diabetes_data-ENL.csv', path: '' },
    { label: 'other', path:'' },
];