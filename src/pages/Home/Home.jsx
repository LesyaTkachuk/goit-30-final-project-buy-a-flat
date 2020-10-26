/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Media from 'react-media';
import ButtonsWrapper from '../../components/ButtonsWrapper';
import LoginForm from '../../components/LoginRegistration/RegistrationForm';
import RegistrationForm from '../../components/LoginRegistration/RegistrationForm';
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
        <Media
          query="(max-width: 767px)"
          render={() =>
            this.props.showLoginForm ? <LoginForm /> : <RegistrationForm />
          }
        />
      </div>
    );
  }
}



export default Home;
