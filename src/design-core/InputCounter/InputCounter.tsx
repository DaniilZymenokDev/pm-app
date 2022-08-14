import React, {useEffect, useRef, useState} from 'react';
import styles from './InputCounter.module.scss'

type PropTypes = {
    initialCount: number,
}

const InputCounter: React.FC<PropTypes> = (props) => {
    const coloredCount: any = useRef();
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (props.initialCount) {
            setCount(props.initialCount);
        }
    }, [props.initialCount])

    if (count && count > 0) {
        coloredCount.current.style.color = "#0CA312";
    }

    const handleChange = (e: any) => {
        if (e.target.value >= 0) {
            setCount(e.target.value)
        } else {
            setCount(0)
        }
    }

    const decrement = (): void => {
        if (count > 0) {
            setCount(Number(count) - 1)
        }
    }

    return (
        <div className={styles.inputCounter}>
            <button onClick={decrement}><span>-</span></button>
            <input
                ref={coloredCount}
                type="number"
                onChange={handleChange} value={count}/>
            <button onClick={() => setCount(Number(count) + 1)}><span>+</span></button>
        </div>
    );
};

export default InputCounter;
