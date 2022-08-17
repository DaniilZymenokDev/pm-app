import React, {useState} from 'react';
import styles from "../NewConnection.module.scss";
import ToggleButtons from "../../../design-core/ToggleSwitcher/ToggleSwitcher";
import SvgSelector from "../../basic-components/SvgSelector/SvgSelector";
import ConfigurationParams from "./ConfigurationParams";
import ConfigurationString from "./ConfigurationString";

const Configuration = () => {
    const [isParams, setIsParams] = useState(true);
    const [configParams, setConfigParams] = useState([]);
    const [faqIndexes, setFaqIndexes] = useState<number[]>([0]);
    const [faqCounter, setFaqCounter] = useState(0);

    const removeItem = (index: number): void => {
        setFaqIndexes((prevIndexes) => [
            ...prevIndexes.filter((item) => item !== index),
        ]);
    }
    const addItem = (): void => {
        setFaqIndexes((prevIndexes) => [...prevIndexes, faqCounter]);
        setFaqCounter((prevCounter) => prevCounter + 1);
        console.log(faqCounter)
    }

    return (
        <div className={styles.stepContentBody}>
            <ToggleButtons isParams={isParams} setIsParams={setIsParams}/>
            {isParams ? <p>Configuration</p> : <p>Connection String</p>}
            {isParams ? <ConfigurationParams addItem={addItem} removeItem={removeItem} faqIndexes={faqIndexes}/> :
                <ConfigurationString/>}
            {isParams && <button onClick={addItem} className={styles.addParamBlock}>
                <SvgSelector id={"Add"}/>
                <p>Add Parameters</p>
            </button>}
        </div>
    );
};

export default Configuration;