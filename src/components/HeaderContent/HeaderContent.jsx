import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthNav from '../AuthNav';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import Media from 'react-media';
import Modal from '../common/Modal';
import styles from './HeaderContent.module.css';
import LoginForm from '../Login_Registration/LoginForm';
import RegistrationForm from '../Login_Registration/RegistrationForm';
import UserInfo from '../UserInfo/UserInfo';
import { globalSelectors } from '../../redux/global';
import { authSelectors } from '../../redux/auth';
import { familySelectors } from '../../redux/family';

class HeaderContent extends Component {
  render() {
    const {
      isAuthenticated,
      authError,
      familyError,
      showModal,
      showLogin,
    } = this.props;

    return (
      <div className={styles.headerContentWrapper}>
        {this.props.isAuthenticated && (
          <Media query="(min-width: 1240px)" render={() => <NavigationBar />} />
        )}
        <Logo />

        {isAuthenticated ? (
          <UserInfo />
        ) : (
          <Media query="(min-width: 768px)" render={() => <AuthNav />} />
        )}
        {showModal && !authError && !familyError && (
          <Modal>{showLogin ? <LoginForm /> : <RegistrationForm />}</Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showLogin: globalSelectors.getShowLoginForm(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
  showModal: globalSelectors.getIsModalOpen(state),
  authError: authSelectors.getError(state),
  familyError: familySelectors.getError(state),
});

export default connect(mapStateToProps)(HeaderContent);
