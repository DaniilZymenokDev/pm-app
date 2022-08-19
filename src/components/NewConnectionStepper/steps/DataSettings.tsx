import React, {ChangeEvent} from 'react';
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
    const errors:Array<string>=["Maximum length: 100 letters."]
    let inputError:string="";
    const validation = (list: string, secondList:string): string => {
            inputError=errors[0]
            if (list.length<100 && secondList) {
                props.setIsValid(true)
            }else if(list.length>100){
                inputError=errors[0]
                props.setIsValid(false)
            }
            return inputError=errors[0]
    }

    return (
        <div className={styles.stepContentBody}>
            <form action="">
                <label htmlFor="">
                    Data Connection Name *
                    <TextField error={!props.isValid && true} value={props.state.name} helperText={!props.isValid && inputError} size={"small"} defaultValue={""}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                   props.setConnectionName(e.target.value);
                               }}/>
                </label>

                <label htmlFor="">
                    Data Source *
                    <Select error={!props.isValid && true} defaultValue={""} value={props.state.data_source} onChange={(e: SelectChangeEvent<string>) => {
                        props.setDataSource(e.target.value);validation(props.state.name, e.target.value)
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
