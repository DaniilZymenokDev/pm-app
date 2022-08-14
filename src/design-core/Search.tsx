import React from 'react';
import TextField from "@mui/material/TextField";
import {IconButton} from "@mui/material";
import SvgSelector from "../components/basic-components/SvgSelector/SvgSelector";
import styles from './DesignCore.module.scss'

const Search: React.FC = () => {

    return (
        <TextField
            className={styles.textInput}
            sx={{width: '97px'}}
            placeholder={"Search"}
            variant="standard"
            InputProps={{
                startAdornment: (
                    <IconButton>
                        <SvgSelector id={"Search"}/>
                    </IconButton>
                ),
            }}
        />
    );
};

export default Search;
