import React from 'react';
import styles from './IconButton.module.scss'
import SvgSelector from "../SvgSelector/SvgSelector";

type PropTypes ={
    svgId: string,
}
const IconButton = (props:PropTypes) => {

    return (
        <button className={styles.iconButton}>
            <SvgSelector id={props.svgId}/>
        </button>
    );
};

export default IconButton;