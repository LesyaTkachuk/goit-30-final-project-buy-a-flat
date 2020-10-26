import React from 'react';
import userIcon from '../../assets/icons/UserIcon.svg';
import styles from './UserInfo.module.css';

function UserInfo() {
  return (
    <div className={styles.UserInfoWrapper}>
      <img src={userIcon} alt="user icon" className={styles.icon} />
      <p className={styles.UserInfoTitle}>UserName</p>
    </div>
  );
}

export default UserInfo;
