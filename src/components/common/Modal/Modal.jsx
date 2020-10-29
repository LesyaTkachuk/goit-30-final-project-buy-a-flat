import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../../redux/global';
import { authSelectors, authActions } from '../../../redux/auth';
import { familySelectors, familyActions } from '../../../redux/family';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.toggleStateData();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.toggleStateData();
    }
  };

  toggleStateData = () => {
    const {
      authError,
      familyError,
      unsetAuthError,
      unsetFamilyError,
      isAuthFormOpen,
      isGiftsNotifOpen,
      isLogoutOpen,
      isVerifyNotifOpen,
      removeAuthForm,
      removeLogout,
      removeGift,
      removeNotif,
    } = this.props;

    isAuthFormOpen && removeAuthForm();
    isLogoutOpen && removeLogout();
    isGiftsNotifOpen && removeGift();
    isVerifyNotifOpen && removeNotif();
    authError && unsetAuthError();
    familyError && unsetFamilyError();
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
  isLogoutOpen: globalSelectors.getIsLogoutOpen(state),
  isAuthFormOpen: globalSelectors.getIsAuthFormOpen(state),
  isGiftsNotifOpen: globalSelectors.getHasGifts(state),
  isVerifyNotifOpen: globalSelectors.getIsVerifyNotifOpen(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
  removeAuthForm: globalActions.toggleAuthForm,
  removeGift: globalActions.toggleHasGifts,
  removeLogout: globalActions.toggleLogout,
  removeNotif: globalActions.toggleVerifyNotif,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
