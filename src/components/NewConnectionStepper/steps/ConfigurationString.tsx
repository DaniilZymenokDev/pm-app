import React from 'react';
import styles from "../NewConnection.module.scss";
import {TextareaAutosize} from "@mui/material";
import {useActions} from "../../../store/hooks";

const ConfigurationString = () => {

    const {addConfigString}=useActions();

    return (
        <div className={styles.parametersActive}>
            <div className={styles.paramsItemList}>
                <TextareaAutosize  onChange={(e:any)=>{addConfigString(e.target.value)}} className={styles.txtArea}/>
            </div>
        </div>
    );
};

export default ConfigurationString;