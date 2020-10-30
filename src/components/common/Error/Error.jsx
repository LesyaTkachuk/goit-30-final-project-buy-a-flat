import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions } from '../../../redux/global';
import { familyActions, familySelectors } from '../../../redux/family';
import { authActions, authSelectors } from '../../../redux/auth';
import styles from './Error.module.css';

class Error extends Component {

  handleClick() {
    const {
      authError,
      familyError,
      unsetAuthError,
      unsetFamilyError,
    } = this.props;
    authError && unsetAuthError();
    familyError && unsetFamilyError();
  }

  render() {
    const { authError, familyError } = this.props;

    return (
      <div className={styles.container}>
        <button
          className={styles.closeModal}
          onClick={() => this.handleClick()}
        ></button>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          <p className={styles.errorText}>{authError || familyError}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
});

const mapDispatchToProps = {
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
