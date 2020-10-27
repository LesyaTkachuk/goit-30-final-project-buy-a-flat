import React from 'react';
import styles from './SocialsButton.module.css';

function Button({ label, className: classForBtn, image }) {
  return (
    <div className={`${styles.buttonAuth} ${classForBtn}`}>
      <img className={styles.buttonAuthIcon} src={image} alt={label} />
      <p className={styles.buttonAuthTitle}>{label}</p>
    </div>
  );
}
export default Button;
