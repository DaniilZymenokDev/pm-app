import React from 'react';
import styles from '../NewConnection.module.scss'
import { Input, Select } from '@mui/material';

const DataSettings = () => {
    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Data Connection Name *
                <Input />
            </label>
            <label htmlFor="">
                Data Source *
                <Select size={"small"}/>
            </label>
        </div>
    );
};

export default DataSettings;
