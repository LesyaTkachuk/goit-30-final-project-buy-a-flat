import React from 'react';
import AuthButton from './AuthButton/AuthButton';
import styles from './AuthButtonsWrapper.module.css';

function AuthButtonsWrapper() {
  return (
    <div className={styles.authButtonsWrapper}>
      <AuthButton label="Войти" />
      <AuthButton label="Регистрация" />
    </div>
  );
}

export default AuthButtonsWrapper;
