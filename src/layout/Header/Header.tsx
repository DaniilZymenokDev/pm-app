import React from 'react';
import styles from './Header.module.scss'
import InputCounter from "../../design-core/InputCounter/InputCounter";
import Selector from "../../design-core/Select/Select";
import IconButton from "../../components/basic-components/IconButton/IconButton";
import UserLogo from "../../components/basic-components/UserLogo/UserLogo";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.currentWorkers}>
                <p>Current Running Workers</p>
                <InputCounter initialCount={20}/>
            </div>
            <div className={styles.techInfoBar}>
                <Selector/>
                <div className={styles.logoWithBtns}>
                    <IconButton svgId={'MessageQuestion'} />
                    <IconButton svgId={'Notification'} />
                    <UserLogo/>
                </div>
            </div>
        </header>
    );
};

export default Header;