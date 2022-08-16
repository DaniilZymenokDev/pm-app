import React, {useState} from 'react';
import styles from "../NewConnection.module.scss";
import ToggleButtons from "../../../design-core/ToggleSwitcher/ToggleSwitcher";
import SvgSelector from "../../basic-components/SvgSelector/SvgSelector";
import ConfigurationParams from "./ConfigurationParams";
import ConfigurationString from "./ConfigurationString";

const Configuration = () => {
    const [isParams, setIsParams] = useState(true);

    return (
        <div className={styles.stepContentBody}>
            <ToggleButtons isParams={isParams} setIsParams={setIsParams}/>
            {isParams ? <p>Configuration</p> : <p>Connection String</p> }
            {isParams ? <ConfigurationParams/> : <ConfigurationString/>}
            {isParams && <div className={styles.addParamBlock}>
                <SvgSelector id={'Add'}/>
                <p>Add Parameters</p>
            </div>}
        </div>
    );
};

export default Configuration;