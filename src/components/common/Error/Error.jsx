import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { globalActions } from '../../../redux/global';
import { familyActions, familySelectors } from '../../../redux/family';
import { authActions, authSelectors } from '../../../redux/auth';
import styles from './Error.module.css';

class Error extends Component {
  componentDidMount() {
    this.props.toggleModal();
  }

  handleClick() {
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
  }

  render() {
    return (
      <div className={styles.container}>
        <Link
          className={styles.closeModal}
          onClick={() => this.handleClick()}
        ></Link>
        <div className={styles.errorWrapper}>
          <h2 className={styles.errorTitle}>Oops, an error occurred</h2>
          <p className={styles.errorText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>
          <Link to="/" className={styles.link}>
            Go to home page
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: authSelectors.getError(state),
  familyError: familySelectors.getError(state),
});

const mapDispatchToProps = {
  toggleModal: globalActions.toggleModal,
  unsetAuthError: authActions.unsetError,
  unsetFamilyError: familyActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
