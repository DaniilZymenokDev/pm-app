import React from 'react';
import EnhancedTable from "../../basic-components/ItemsTable/ItemsTable";
import styles from './ConnectionsTable.module.scss'
import './globalTableStyles.scss'

type PropTypes={
    list: Array<object>;
}

const ConnectionsTable = (props:PropTypes) => {

    return (
        <div className={styles.connectionsTable}>
            <EnhancedTable />
        </div>
    );
};

export default ConnectionsTable;