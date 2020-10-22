import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/icons/logotype.svg';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to="/" className={styles.logoWrapper}>
      <img src={logoIcon} alt="logo icon" className={styles.logoImage} />
      <p className={styles.logoTitle}>Finance</p>
    </Link>
  );
}

export default Logo;
