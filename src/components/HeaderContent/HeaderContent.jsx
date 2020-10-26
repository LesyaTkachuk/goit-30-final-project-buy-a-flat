import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthButtonsWrapper from '../AuthButtonsWrapper';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import Media from 'react-media';
import Modal from '../common/Modal';
import styles from './HeaderContent.module.css';
import LoginForm from '../LoginRegistration/RegistrationForm';
import RegistrationForm from '../LoginRegistration/RegistrationForm';
import UserInfo from '../UserInfo/UserInfo';
import { globalSelectors } from '../../redux/global';
import { authSelectors } from '../../redux/auth';

class HeaderContent extends Component {
  render() {
    return (
      <div className={styles.headerContentWrapper}>
        {this.props.isAuthenticated && (
          <Media query="(min-width: 1240px)" render={() => <NavigationBar />} />
        )}
        <Logo />

        {this.props.isAuthenticated ? (
          <UserInfo />
        ) : (
          <Media
            query="(min-width: 768px)"
            render={() => <AuthButtonsWrapper />}
          />
        )}
        {this.props.showModal && (
          <Modal>
            {this.props.showLogin ? <LoginForm /> : <RegistrationForm />}
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showLogin: globalSelectors.getShowLoginForm(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
  showModal: globalSelectors.getIsModalOpen(state),
});

export default connect(mapStateToProps)(HeaderContent);
