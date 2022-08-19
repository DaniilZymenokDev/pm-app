import React, {Dispatch, SetStateAction} from 'react';
import styles from "../NewConnection.module.scss";
import {Input, TextField} from "@mui/material";

type PropTypes = {
    setUserName:any,
    setPassword: any,
    setIsValid: (value: boolean) => void,
    state: any
    isValid: boolean,
}

const Credentials = (props:PropTypes) => {
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
            <label htmlFor="">
                Username*
                <TextField  onChange={(e:any)=> {props.setUserName(e.target.value)}} placeholder={"Enter User Name"} size={"small"}/>
            </label>
            <label htmlFor="">
                Password*
                <TextField  onChange={(e:any)=> {props.setPassword(e.target.value);validation(props.state.password, e.target.value)}} type={"password"}/>
            </label>
        </div>
    );
};

export default Credentials;