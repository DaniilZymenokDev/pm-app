import React from 'react';
import EnhancedTable from "../../basic-components/ItemsTable/ItemsTable";
import styles from './ConnectionsTable.module.scss'
import './globalTableStyles.scss'

type PropTypes={
    list: Array<any>;
}

const ConnectionsTable = (props:PropTypes) => {
    console.log(props.list);

    // @ts-ignore
    return (
        <div className={styles.connectionsTable}>
            <EnhancedTable />
        </div>
    );
};

export default ConnectionsTable;