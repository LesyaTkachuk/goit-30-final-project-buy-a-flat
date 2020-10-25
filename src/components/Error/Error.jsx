import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

class Error extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link className={styles.closeModal}></Link>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          <p className={styles.errorText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>
          <Link to="/" className={styles.link}>
            Go to home page
          </Link>
        </div>
      </div>
    );
  }
}

export default Error;
