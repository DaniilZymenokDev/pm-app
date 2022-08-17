import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import styles from '../NewConnection.module.scss'
import {Input, Select, MenuItem, SelectChangeEvent} from '@mui/material';

type PropTypes = {
    connectionName?:string,
    setConnectionName:(value:string)=>void,
    dataSource?:string,
    setDataSource: (value:string)=>void,
}

const DataSettings = (props:PropTypes) => {

    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Data Connection Name *
                <Input value={props.connectionName} onChange={(e:ChangeEvent<HTMLInputElement>)=>{props.setConnectionName(e.target.value)}}/>
            </label>
            <label htmlFor="">
                Data Source *
                <Select value={props.dataSource} onChange={(e:SelectChangeEvent<string>)=>props.setDataSource(e.target.value)} size={"small"}>
                    <MenuItem value={'azureSQL'}>Azure SQL</MenuItem>
                    <MenuItem value={'oracleDb'}>Oracle DB</MenuItem>
                    <MenuItem value={'CSV'}>CSV</MenuItem>
                </Select>
            </label>
        </div>
    );
};

export default DataSettings;
