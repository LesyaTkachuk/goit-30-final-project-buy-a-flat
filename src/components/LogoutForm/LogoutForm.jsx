import React, { Component } from 'react';
import styles from './LogoutForm.module.css';

class LogoutForm extends Component {
  state = {
  };


  render() {

    return (
      <div className={styles.modal__logout}>
          <div className={styles.logout__wrapper}>
              <h2 className={styles.logout__text}>Вы уверены что хотите выйти?</h2>
              <div className={styles.logout_wrapper__Bth}>
                  <button className={styles.logout__Bth}><p className={styles.logout__Bth_text}>Да</p></button>
                  <button className={styles.logout__Bth + ' ' + styles.logout__Bth_not}><p className={styles.logout__Bth_text}>Нет</p></button>
              </div>
          </div>
      </div>
    );
  }
}


export default LogoutForm;
