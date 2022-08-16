import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from '../DesignCore.module.scss';

type PropTypes={
    isParams:boolean,
    setIsParams: any,
}

export default function ToggleButtons(props:PropTypes) {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };
    const handleClickParams = ():void =>{
        props.setIsParams(true)
    }
    const handleClickText = ():void =>{
        props.setIsParams(false)
    }
    return (
        <ToggleButtonGroup
            className={styles.toggleGroup}
            value={alignment}

            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton  onClick={handleClickParams} value="left" aria-label="left aligned">
                <p>Parameters</p>
            </ToggleButton>
            <ToggleButton onClick={handleClickText} value="center" aria-label="centered">
                <p>Connection String</p>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}