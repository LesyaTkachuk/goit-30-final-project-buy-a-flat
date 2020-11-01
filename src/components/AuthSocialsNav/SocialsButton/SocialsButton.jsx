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
      <div
        className={`${styles.buttonAuth} ${classForBtn}`}
        onClick={this.handleClick}
      >
        <img className={styles.buttonAuthIcon} src={image} alt={label} />
        <p className={styles.buttonAuthTitle}>{label}</p>
      </div>
    );
  }
}

export default SocialsButton;
