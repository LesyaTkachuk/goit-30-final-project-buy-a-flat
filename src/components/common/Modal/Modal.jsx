import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions } from '../../../redux/global';
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
      this.checkForError();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.checkForError();
    }
  };

  checkForError = () => {
    const {
      toggleModal,
      authError,
      familyError,
      unsetAuthError,
      unsetFamilyError,
    } = this.props;
    toggleModal();
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
});

const mapDispatchToProps = {
  toggleModal: globalActions.toggleModal,
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
