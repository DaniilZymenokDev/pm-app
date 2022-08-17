import React, {ChangeEvent} from 'react';
import styles from "../NewConnection.module.scss";
import {TextareaAutosize} from "@mui/material";

type PropTypes={
    setConnectionString:(value:string)=>void
}

const ConfigurationString = (props:PropTypes) => {

    return (
        <div className={styles.parametersActive}>
            <div className={styles.paramsItemList}>
                <TextareaAutosize  onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{props.setConnectionString(e.target.value)}} className={styles.txtArea}/>
            </div>
        </div>
    );
};

export default ConfigurationString;