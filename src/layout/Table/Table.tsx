import React from 'react';
import styles from './Table.module.scss'

const Table = ({...props}) => {
    return (
        <div className={styles.table}>
            <div className={styles.tableContainer}>
                {props.children}
            </div>
        </div>
    );
};

export default Table;
