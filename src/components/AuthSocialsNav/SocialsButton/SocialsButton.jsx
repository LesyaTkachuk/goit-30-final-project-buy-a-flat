import React, { Component } from 'react';
import styles from './SocialsButton.module.css';

class SocialsButton extends Component {
  render() {
    const { label } = this.props;
    return (
      <a
        href={
          label === 'Sign up with Google'
            ? 'https://flat-finance.herokuapp.com/auth/google'
            : '/'
        }
        className={`${styles.buttonAuth} ${styles.google_btn}`}
      >
        {label}
      </a>
    );
  }
}

export default SocialsButton;
