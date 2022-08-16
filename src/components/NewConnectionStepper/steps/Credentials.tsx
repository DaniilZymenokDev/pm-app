import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewConnection.module.scss";
import {Input} from "@mui/material";

type PropTypes = {
    userName?:string,
    setUserName:any,
    password?: string,
    setPassword: any,
}

const Credentials = (props:PropTypes) => {
    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Username*
                <Input value={props.userName} onChange={(e:any)=> {props.setUserName(e.target.value)}} placeholder={"Enter User Name"}/>
            </label>
            <label htmlFor="">
                Password*
                <Input value={props.password} onChange={(e:any)=> props.setPassword(e.target.value)} type={"password"}/>
            </label>
        </div>
    );
};

export default Credentials;