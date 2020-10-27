import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../redux/global';
import styles from './AuthToggler.module.css';

class AuthToggler extends Component {
  render() {
    const { showLogin, toggleShowLogin } = this.props;
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>
          {showLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
        </p>
        <button className={styles.button} onClick={() => toggleShowLogin()}>
          {showLogin ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showLogin: globalSelectors.getShowLoginForm(state),
});

const mapDispatchToProps = {
  toggleShowLogin: globalActions.toggleShowLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthToggler);
