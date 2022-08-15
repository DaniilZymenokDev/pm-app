import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewConnection.module.scss";
import {Input} from "@mui/material";

type PropTypes = {
    userName:string,
    setUserName:Dispatch<SetStateAction<string>>,
    password: string,
    setPassword: Dispatch<SetStateAction<string>>,
}

const Credentials = (props:PropTypes) => {
    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Username*
                <Input value={props.userName} onChange={()=> props.setUserName} placeholder={"Enter User Name"}/>
            </label>
            <label htmlFor="">
                Password*
                <Input type={"password"}/>
            </label>
        </div>
    );
};

export default Credentials;