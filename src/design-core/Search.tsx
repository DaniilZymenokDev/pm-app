import React from 'react';
import TextField from "@mui/material/TextField";
import {IconButton} from "@mui/material";
import SvgSelector from "../components/basic-components/SvgSelector/SvgSelector";
import styles from './DesignCore.module.scss'

type PropTypes = {
    searchValue: string,
    setSearchValue: (e:string)=>void,
}

const Search = (props:PropTypes) => {

    return (
        <TextField
            className={styles.textInput}
            sx={{width: '97px'}}
            placeholder={"Search"}
            variant="standard"
            value={props.searchValue}
            onChange={(e)=>props.setSearchValue(e.target.value)}
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
