import React, {useEffect, useState} from 'react';
import EnhancedTable from "../../basic-components/ItemsTable/ItemsTable";
import styles from './ConnectionsTable.module.scss'
import './globalTableStyles.scss'
import axios from "axios";
import {useAppDispatch} from "../../../store/hooks";
import {addManyConnections} from "../../../store/connectionsSlice";
import {getConnections} from "../../../api";

type PropTypes = {
    list: Array<object>,
    searchValue:string,
}

const ConnectionsTable = (props: PropTypes) => {

    

    const dispatch = useAppDispatch();
    useEffect(() => {
        getConnections().then(connections => {dispatch(addManyConnections(connections))})
            .catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div className={styles.connectionsTable}>
            <EnhancedTable searchValue={props.searchValue}/>
        </div>
    );
};

export default ConnectionsTable;