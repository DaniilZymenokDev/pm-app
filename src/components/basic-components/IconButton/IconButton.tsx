import React from 'react';
import styles from './IconButton.module.scss'
import SvgSelector from "../SvgSelector/SvgSelector";

type PropTypes ={
    svgId: string,
    componentColor?:string,
}
const IconButton = (props:PropTypes) => {
    let colorStyles = {
        container: {
            background:props.componentColor || '#F4F6F9',
        },
    }
    return (
        <div style={colorStyles.container} className={styles.iconButton}>
            <SvgSelector id={props.svgId}/>
        </div>
    );
};

export default IconButton;