import React, {ChangeEvent} from 'react';
import styles from '../NewConnection.module.scss'
import {Input, Select, MenuItem, SelectChangeEvent, TextField} from '@mui/material';
import {Controller, Control, FieldValues, useForm, SubmitHandler, useFormState} from "react-hook-form";


type PropTypes = {
    setConnectionName:(value:string)=>void,
    setDataSource: (value:string)=>void,
    handleSubmit:any,
    control: any
}
interface DataSettings{
    connectionName:string,
    dataSource:string,
}
const DataSettings = (props:PropTypes) => {

    const onSubmit: SubmitHandler<any> = (data) =>console.log(data);
    const {errors} = useFormState({props.control});
    console.log('Errors: ', errors);
    return (
        <div className={styles.stepContentBody}>
            <form action="" onSubmit={props.handleSubmit(onSubmit)}>
                <Controller
                    rules={{required:true}}
                    control={props.control}
                    name="connectionName"
                    render={({field})=>(
                        <label htmlFor="">
                            Data Connection Name *
                            <TextField helperText={errors.connectionName?.message} size={"small"} value={field.value} defaultValue={""}  onChange={(e:ChangeEvent<HTMLInputElement>)=>{props.setConnectionName(e.target.value);field.onChange(e)}}/>
                        </label>
                    )}
                />
                <Controller
                    control={props.control}
                    name="dataSource"
                    render={({field})=>(
                        <label htmlFor="">
                            Data Source *
                            <Select value={field.value} defaultValue={""} onChange={(e:SelectChangeEvent<string>)=>{props.setDataSource(e.target.value);field.onChange(e)}} size={"small"}>
                                <MenuItem value={'azureSQL'}>Azure SQL</MenuItem>
                                <MenuItem value={'oracleDb'}>Oracle DB</MenuItem>
                                <MenuItem value={'CSV'}>CSV</MenuItem>
                            </Select>
                        </label>
                    )}
                />
            </form>


        </div>
    );
};

export default DataSettings;
