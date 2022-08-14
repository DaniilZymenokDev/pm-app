import React from 'react';
import EnhancedTable from "../../basic-components/ItemsTable/ItemsTable";
import styles from './ConnectionsTable.module.scss'
import './globalTableStyles.scss'

const ConnectionsTable: React.FC = () => {

    return (
        <div className={styles.connectionsTable}>
            <EnhancedTable/>
        </div>
    );
};

export default ConnectionsTable;