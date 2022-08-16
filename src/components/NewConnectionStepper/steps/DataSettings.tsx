import React, {Dispatch, SetStateAction} from 'react';
import styles from '../NewConnection.module.scss'
import { Input, Select, MenuItem } from '@mui/material';

type PropTypes = {
    connectionName:string,
    setConnectionName:any,
    dataSource:string,
    setDataSource: Dispatch<SetStateAction<string>>,
}

const DataSettings = (props:PropTypes) => {

    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Data Connection Name *
                <Input value={props.connectionName} onChange={(e:any)=>{props.setConnectionName(e.target.value)}}  />
            </label>
            <label htmlFor="">
                Data Source *
                <Select value={props.dataSource} onChange={(e)=>props.setDataSource(e.target.value)} size={"small"}>
                    <MenuItem value={'azureSQL'}>Azure SQL</MenuItem>
                    <MenuItem value={'oracleDb'}>Oracle DB</MenuItem>
                    <MenuItem value={'CSV'}>CSV</MenuItem>
                </Select>
            </label>
        </div>
    );
};

export default DataSettings;
