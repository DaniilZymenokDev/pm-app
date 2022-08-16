import React, {useState} from 'react';
import styles from '../NewConnection.module.scss'
import {IconButton, Input, MenuItem, Select} from "@mui/material";
import SvgSelector from "../../basic-components/SvgSelector/SvgSelector";
import {useActions} from "../../../store/hooks";

const ConfigurationParams = () => {

    const {addConfig}=useActions();
    const [configParams, setConfigParams] = useState([]);

    const configStateBuilder = (key:string, value:string):object =>{
        type singleOptionTypes = {
            key: string,
            value: string
        }
        let singleOption:singleOptionTypes = {key:'', value:''};
        singleOption.key = key;
        singleOption.value = value;
        return singleOption;
    }

    return (
        <div className={styles.parametersActive}>
            <div className={styles.paramsItemList}>
                <div className={  styles.paramsItem}>
                    <label htmlFor="">
                        <Select size={"small"}>
                            <MenuItem value={'Timeout'}>Timeout</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </label>
                    <label htmlFor="">
                        <Input size={"small"}/>
                    </label>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                    >
                        <SvgSelector id={"Trash"}/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ConfigurationParams;
