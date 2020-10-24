import React, { Component } from 'react';
import styles from '../LoginRegistForm.module.css';
// import {connect} from 'react-redux';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',

    nameErorr: '',
    emailErorr: '',
    passwordErorr: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      this.setState({
        nameErorr: '',
        emailErorr: '',
        passwordErorr: '',
      });

      this.props.onRegister({ ...this.state });
    }
  };

  validate = () => {
    console.log(this.state.name);
    let nameErorr = '';
    let emailErorr = '';
    let passwordErorr = '';

    console.log('validate');
    console.log(this.state.name);

    if (!this.state.name) {
      nameErorr = 'Не указано имя пользователя';
    }

    if (this.state.password.length < 3 || this.state.password.length > 8) {
      passwordErorr = 'Пароль меньше 3 или больш 8 символов';
    }

    if (!this.state.email.includes('@')) {
      emailErorr = 'Неправильный E-mail';
    }

    if (nameErorr || emailErorr || passwordErorr) {
      this.setState({ nameErorr, emailErorr, passwordErorr });
      return false;
    }

    return true;
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.modal__Registration}>
        <form onSubmit={this.handleSubmit} className={styles.loginRegist__form}>
          <h2 className={styles.loginRegist__heading}>Регистрация</h2>

          <label className={styles.loginRegist__inputform}>
            <label className={styles.loginRegist__input_text}>Имя</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Введите ваше имя"
              className={styles.loginRegist__input}
              onChange={this.handleChange}
              autoFocus
            />
            <div className={styles.loginRegist__invalid}>
              {this.state.nameErorr}
            </div>
          </label>

          <br />
          <label className={styles.loginRegist__inputform}>
            <label className={styles.loginRegist__input_text}>E-mail</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Your@e-mail.com"
              className={styles.loginRegist__input}
              onChange={this.handleChange}
            />
            <div className={styles.loginRegist__invalid}>
              {this.state.emailErorr}
            </div>
          </label>

          <br />
          <label className={styles.loginRegist__inputform}>
            <label className={styles.loginRegist__input_text}>Пароль</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Введите пароль"
              className={styles.loginRegist__input}
              onChange={this.handleChange}
            />
            <div className={styles.loginRegist__invalid}>
              {this.state.passwordErorr}
            </div>
          </label>

          <br />
          <button type="submit" className={styles.loginRegist__Bth}>
            <p className={styles.loginRegist__Bth_text}>Зарегистрироваться</p>
          </button>
          <p className={styles.loginRegist_mobile__Text}>
            Уже есть аккаунт?{' '}
            <button className={styles.loginRegist_mobile__Bth}>Войти</button>
          </p>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
