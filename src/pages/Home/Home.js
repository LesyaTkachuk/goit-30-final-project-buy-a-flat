import React, { Component } from 'react';
import styles from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Планировщик{' '}
          <span className={styles.title_break}>для совместного</span>{' '}
          <span className={styles.title_orange}>накопления</span> на квартиру
        </h1>
      </div>
    );
  }
}

export default Home;
