import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "../NewConnection.module.scss";
import {TextField} from "@mui/material";

type PropTypes = {
    setUserName:any,
    setPassword: any,
    setIsValid: (value: boolean) => void,
    state: any
    isValid: boolean,
}

const Credentials = (props:PropTypes) => {

    const errors: Array<string> = ["Maximum length: 100 letters."]
    let inputError: string = "";
    const [isError, setIsError]=useState(false);

    const validation = (list: string, secondList: string): string => {
        props.setIsValid(false)
        inputError = errors[0];
        const regexp=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gi;
        if(!regexp.test(list)){
            props.setIsValid(false);
            setIsError(true)
        }else{
            props.setIsValid(true);
            setIsError(false)
        }
        if (list.length < 100 && secondList) {
            setIsError(false)
            props.setIsValid(true)
        } else if (list.length > 100) {
            inputError = errors[0]
            setIsError(true)
            props.setIsValid(false)
        }
        return inputError = errors[0]
    }

    return (
        <div className={styles.stepContentBody}>
            <label htmlFor="">
                Username*
                <TextField  error={isError && true} onChange={(e:any)=> {props.setUserName(e.target.value);validation(e.target.value, props.state.password)}}  placeholder={"Enter User Name"} size={"small"}/>
            </label>
            <label htmlFor="">
                Password*
                <TextField  error={isError && true} onChange={(e:any)=> {props.setPassword(e.target.value);validation(props.state.password, e.target.value)}} placeholder={"Enter password"} type={"password"} size={"small"}/>
            </label>
        </div>
    );
};

export default Credentials;