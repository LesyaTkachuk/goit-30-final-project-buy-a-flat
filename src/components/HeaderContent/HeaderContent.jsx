import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthButtonsWrapper from '../AuthButtonsWrapper';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import Media from 'react-media';
import Modal from '../common/Modal';
import styles from './HeaderContent.module.css';
import LoginForm from '../LoginRegistration/LoginForm';
import RegistrationForm from '../LoginRegistration/RegistrationForm';

class HeaderContent extends Component {
  render() {
    return (
      <div className={styles.headerContentWrapper}>
        <Media query="(min-width: 1240px)" render={() => <NavigationBar />} />
        <Logo />
        <Media
          query="(min-width: 768px)"
          render={() => <AuthButtonsWrapper />}
        />
        {/* {this.props.showModal && (
          <Modal>
            <LoginForm />
          </Modal>
        )} */}
        {this.props.showModal && (
          <Modal>
            <RegistrationForm />
          </Modal>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => ({
  showModal: state.global.isModalOpen,
});

export default connect(mapDispatchToProps)(HeaderContent);
