import React, { Component } from 'react';
import styles from './TestButton.module.css';

class TestButton extends Component {
  handleClick = () => {
    this.props.loginTestAccount({
      email: 'buy.a.flat.2020@gmail.com',
      password: '2020',
    });
  };

  render() {
    const { label } = this.props;
    return (
      <button
        onClick={this.handleClick}
        className={`${styles.buttonAuth} ${styles.test_btn}`}
      >
        {label}
      </button>
    );
  }
}

export default TestButton;
