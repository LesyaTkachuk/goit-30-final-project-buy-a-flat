import React from 'react';
import Button from './SocialsButton';
import TestButton from './TestButton';
import styles from './AuthSocialsNav.module.css';

function ButtonsWrapper() {
  return (
    <div className={styles.buttons__wrapper}>
      <Button label="Sign up with Google" data-name="Google"></Button>
      <TestButton
        label="Login Test Account"
        data-name="TestAccount"
      ></TestButton>
    </div>
  );
}
export default ButtonsWrapper;
