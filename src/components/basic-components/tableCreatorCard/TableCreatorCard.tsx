import React from 'react';
import styles from './TableCreatorCard.module.scss'
import logo from '../../../assets/img/png/profile.png'

type PropTypes={
    imgLink?:string,
    name:string,
}

const TableCreatorCard:React.FC<PropTypes> = (props) => {

    return (
        <a href={'#'} className={styles.creatorCard}>
            <img src={logo} alt=""/>
            <p>{props.name}</p>
        </a>
    );
};

export default TableCreatorCard;