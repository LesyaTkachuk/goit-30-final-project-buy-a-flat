import React from 'react';
import { connect } from 'react-redux';
import globalActions from '../../../redux/global/globalActions';
import styles from './AuthButton.module.css';

function AuthButton({ label, className: classForBtn, onClick }) {
  return (
    <button className={`${styles.authButton} ${classForBtn}`} onClick={onClick}>
      {label}
    </button>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(globalActions.toggleModal(ownProps.label)),
});

export default connect(null, mapDispatchToProps)(AuthButton);
