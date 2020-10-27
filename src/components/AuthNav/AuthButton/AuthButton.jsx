import React from 'react';
import { connect } from 'react-redux';
import globalActions from '../../../redux/global/globalActions';
import styles from './AuthButton.module.css';

function AuthButton({
  label,
  className: classForBtn,
  showModal,
  toggleShowLogin,
}) {
  function handleClick() {
    showModal();
    toggleShowLogin();
  }
  return (
    <button
      className={`${styles.authButton} ${classForBtn}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  showModal: () => dispatch(globalActions.toggleModal()),
  toggleShowLogin: () =>
    dispatch(globalActions.toggleShowLogin(ownProps.label)),
});

export default connect(null, mapDispatchToProps)(AuthButton);
