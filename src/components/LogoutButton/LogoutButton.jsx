import React from 'react';
import styles from './LogoutButton.module.css';
import logoutIco from '../../assets/icons/logout.svg';

const LogoutButton = () => (
  <div className={styles.buttonLogout}>
    <p className={styles.buttonLogoutTitle}>Выйти</p>
    <img className={styles.buttonLogoutIcon} src={logoutIco} alt={'Выйти'} />
  </div>
);

export default LogoutButton;
