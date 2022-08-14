import React from 'react';
import styles from '../basicComponents.module.scss'
import userAvatar from '../../../assets/img/png/profile.png'

type PropTypes = {
    userName?:string,
}

const UserLogo:React.FC<PropTypes> = (props) => {
    return (
        <div className={styles.userLogo}>
            <img src={userAvatar} alt="User logo"/>
            <p>{props.userName}</p>
        </div>
    );
};

export default UserLogo;