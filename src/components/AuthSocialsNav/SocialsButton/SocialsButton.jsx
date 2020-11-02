import React, { Component } from 'react';
import styles from './SocialsButton.module.css';

class SocialsButton extends Component {
  handleClick = () => {
    const { googleAuth, label } = this.props;
    label === 'Sign up with Google' && googleAuth();
  };

  render() {
    const { label, className: classForBtn, image } = this.props;
    return (
      <a
        href="https://flat-finance.herokuapp.com/auth/google"
        classForBtn={`${styles.buttonAuth} ${classForBtn}`}
      >
        <img className={styles.buttonAuthIcon} src={image} alt={label} />
        <p className={styles.buttonAuthTitle}>{label}</p>
      </a>
    );
  }
}

export default SocialsButton;
