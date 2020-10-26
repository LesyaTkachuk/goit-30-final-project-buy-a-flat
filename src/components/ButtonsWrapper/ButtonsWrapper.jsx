import React from 'react';
import Button from './Button';
import googleIcon from '../../assets/icons/google-auth.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import styles from './ButtonsWrapper.module.css';

function ButtonsWrapper() {
  return (
    <div className={styles.buttons__wrapper}>
      <Button
        label="Sign up with Google"
        image={googleIcon}
        className={styles.google_btn}
        data-name="Google"
      ></Button>
      <Button
        image={facebookIcon}
        label="Sign up with Facebook"
        className={styles.facebook_btn}
        data-name="Facebook"
      ></Button>
    </div>
  );
}
export default ButtonsWrapper;
