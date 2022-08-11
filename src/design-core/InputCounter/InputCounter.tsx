import React, {useRef, useState} from 'react';
import styles from './InputCounter.module.scss'

type PropTypes={
    count?:number,
}

const InputCounter = (props:PropTypes) => {
    const coloredCount:any = useRef();
    const [count, setCount] = useState<number>(0);

    if(count>0){
        coloredCount.current.style.color = "#0CA312";
    } else if(count<0){
        coloredCount.current.style.color = "#F50000";
    }

    return (
        <div className={styles.inputCounter}>
            <button onClick={()=>setCount(count-1)}><span>-</span></button>
            <input
                ref={coloredCount}
                type="number"
                disabled
                onChange={(e:any)=>setCount(e.target.value)} value={count}/>
            <button onClick={()=>setCount(count+1)}><span>+</span></button>
        </div>
    );
};

export default InputCounter;
