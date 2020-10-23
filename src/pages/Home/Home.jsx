import React, { Component } from 'react';
import ButtonsWrapper from '../../components/ButtonsWrapper';
import styles from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Планировщик
          <span className={styles.title__break}> для совместного </span>
          <span className={styles.title__orange}>накопления</span> на квартиру
        </h1>
        <ButtonsWrapper />
      </div>
    );
  }
}

export default Home;
