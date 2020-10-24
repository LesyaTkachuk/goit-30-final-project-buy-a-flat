import React from 'react';
import styles from './AuthButton.module.css';

function AuthButton({ label, className: classForBtn }) {
  return (
    <button className={`${styles.authButton} ${classForBtn}`}>{label}</button>
  );
}

export default AuthButton;
