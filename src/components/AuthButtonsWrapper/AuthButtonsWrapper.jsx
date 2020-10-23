import React from 'react';
import AuthButton from './AuthButton/AuthButton';
import styles from './AuthButtonsWrapper.module.css';

function AuthButtonsWrapper() {
  return (
    <div className={styles.authButtonsWrapper}>
      <AuthButton label="Войти" className={styles.loginBtn} />
      <AuthButton label="Регистрация" className={styles.registerBtn} />
    </div>
  );
}

export default AuthButtonsWrapper;
