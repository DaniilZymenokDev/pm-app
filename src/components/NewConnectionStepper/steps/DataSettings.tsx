import React, {ChangeEvent, useState} from 'react';
import styles from '../NewConnection.module.scss'
import {MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material';


type PropTypes = {
    setConnectionName: (value: string) => void,
    setDataSource: (value: string) => void,
    setIsValid: (value: boolean) => void,
    state: any
    isValid: boolean,
}

const DataSettings = (props: PropTypes) => {
    const errors: Array<string> = ["Maximum length: 100 letters."]
    let inputError: string = "";
    const [isError, setIsError]=useState(false);
    const validation = (list: string, secondList: string): string => {
        inputError = errors[0];
        const regexp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gi;
        if(!regexp.test(list)){
            props.setIsValid(false);
            setIsError(true)
        }else{
            props.setIsValid(true);
            setIsError(false)
        }
        if (list.length < 100 && secondList) {
            setIsError(false)
            props.setIsValid(true)
        } else if (list.length > 100) {
            inputError = errors[0]
            setIsError(true)
            props.setIsValid(false)
        }
        return inputError = errors[0]
    }

    return (
        <div className={styles.stepContentBody}>
            <form action="">
                <label htmlFor="">
                    Data Connection Name *
                    <TextField error={isError&& true} value={props.state.name}
                               helperText={!props.isValid && inputError} size={"small"} defaultValue={""}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                   props.setConnectionName(e.target.value);validation(e.target.value, props.state.data_source)
                               }}/>
                </label>

                <label htmlFor="">
                    Data Source *
                    <Select error={isError && true} defaultValue={""} value={props.state.data_source}
                            onChange={(e: SelectChangeEvent<string>) => {
                                props.setDataSource(e.target.value);
                                validation(props.state.name, e.target.value)
                            }} size={"small"}>
                        <MenuItem value={'azureSQL'}>Azure SQL</MenuItem>
                        <MenuItem value={'oracleDb'}>Oracle DB</MenuItem>
                        <MenuItem value={'CSV'}>CSV</MenuItem>
                    </Select>
                </label>
            </form>


        </div>
    );
};

export default DataSettings;
