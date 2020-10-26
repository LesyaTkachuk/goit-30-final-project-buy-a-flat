import React, { Component } from 'react';
import { Formik } from 'formik';
import styles from '../loginRegistForm.module.css';
// import {connect} from 'react-redux';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  initialValues = { email: '', password: '' };

  validate = values => {
    const errors = {};

    if (!values.password) {
      errors.password = 'Не указан пароль';
    } else if (values.password.length < 3 || values.password.length > 8) {
      errors.password = 'Пароль меньше 3 или больше 8 символов';
    }
    return errors;
  };

  handleSubmit = async (values, { setSubmitting }) => {
    this.state.email = values.email;
    this.state.password = values.password;

    // console.log(this.state.email, this.state.password);
    this.props.onLogin({ ...this.state });
    setSubmitting(false);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.modal__login}>
        <Formik
          initialValues={this.initialValues}
          validate={this.validate}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.loginRegist__form}>
              <h2 className={styles.loginRegist__heading}>Вход</h2>

              <label className={styles.loginRegist__inputform}>
                <label className={styles.loginRegist__input_text}>E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Your@e-mail.com"
                  className={
                    (errors.email &&
                      touched.email &&
                      styles.loginRegist__input_error +
                        ' ' +
                        styles.loginRegist__input) ||
                    styles.loginRegist__input
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  autoFocus
                />
              </label>

              <br />
              <label className={styles.loginRegist__inputform}>
                <label className={styles.loginRegist__input_text}>Пароль</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Введите пароль"
                  className={
                    (errors.password &&
                      touched.password &&
                      styles.loginRegist__input_error +
                        ' ' +
                        styles.loginRegist__input) ||
                    styles.loginRegist__input
                  }
                  // onChange={this.handleChange}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className={styles.loginRegist__invalid}>
                  {errors.password && touched.password && errors.password}
                </div>
              </label>

              <br />
              <button
                type="submit"
                className={styles.loginRegist__Bth}
                disabled={isSubmitting}
              >
                <p className={styles.loginRegist__Bth_text}>Войти</p>
              </button>
            </form>
          )}
        </Formik>
        <p className={styles.loginRegist_mobile__Text}>
          Уже есть аккаунт?{' '}
          <button className={styles.loginRegist_mobile__Bth}>
            Зарегистрироваться
          </button>
        </p>
      </div>
    );
  }
}
export default LoginForm;
