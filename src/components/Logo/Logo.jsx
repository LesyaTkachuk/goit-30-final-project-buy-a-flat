import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/icons/logo.svg';
import styles from './Logo.module.css';

class Logo extends Component {
  render() {
    return (
      <Link to="/" className={styles.logoWrapper}>
        <img src={logoIcon} alt="logo icon" className={styles.logoImage} />
        <span className={styles.logoTitle}>Finance</span>
      </Link>
    );
  }
}

export default Logo;
