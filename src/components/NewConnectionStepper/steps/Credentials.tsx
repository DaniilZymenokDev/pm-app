import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewConnection.module.scss";
import {Input} from "@mui/material";

type PropTypes = {
    setUserName:any,
    setPassword: any,
}

const Credentials = (props:PropTypes) => {
    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Username*
                <Input  onChange={(e:any)=> {props.setUserName(e.target.value)}} placeholder={"Enter User Name"}/>
            </label>
            <label htmlFor="">
                Password*
                <Input  onChange={(e:any)=> props.setPassword(e.target.value)} type={"password"}/>
            </label>
        </div>
    );
};

export default Credentials;