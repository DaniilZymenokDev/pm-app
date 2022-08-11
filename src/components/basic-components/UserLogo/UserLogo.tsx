import React from 'react';
import styles from './UserLogo.module.scss'
import userAvatar from '../../../assets/img/png/profile.png'

type PropTypes = {
    userName?:string,
}

const UserLogo = (props:PropTypes) => {
    return (
        <div className={styles.userLogo}>
            <img src={userAvatar} alt="User logo"/>
            <p>{props.userName}</p>
        </div>
    );
};

export default UserLogo;
