import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions } from '../../../redux/global';
import { familyActions, familySelectors } from '../../../redux/family';
import { authActions, authSelectors } from '../../../redux/auth';
import styles from './Error.module.css';

class Error extends Component {
  handleClick() {
    const {
      authErrorCode,
      familyErrorCode,
      unsetAuthError,
      unsetFamilyError,
    } = this.props;
    authErrorCode && unsetAuthError();
    familyErrorCode && unsetFamilyError();
  }

  render() {
    const {
      authErrorCode,
      authErrorMessage,
      familyErrorCode,
      familyErrorMessage,
    } = this.props;

    return (
      <div className={styles.container}>
        <button
          className={styles.closeModal}
          onClick={() => this.handleClick()}
        ></button>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          <p className={styles.errorText}>{authErrorCode || familyErrorCode}</p>
          {(familyErrorMessage || authErrorMessage) && (
            <p className={styles.errorText}>
              {authErrorMessage || familyErrorMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authErrorMessage: authSelectors.getErrorMessage(state),
  authErrorCode: authSelectors.getErrorCode(state),
  familyErrorMessage: familySelectors.getErrorMessage(state),
  familyErrorCode: familySelectors.getErrorCode(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
