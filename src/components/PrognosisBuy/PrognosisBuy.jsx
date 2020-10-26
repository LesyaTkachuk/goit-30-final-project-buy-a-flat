import React from 'react';
import styles from './PrognosisBuy.module.css';

const PrognosisBuy = () => (
  <div className={styles.componentBlock}>
    <div className={styles.contentWrapper}>
      <p className={styles.title}>У вас будет квартира через:</p>
      <div className={styles.innerWrapper}>
        <div className={styles.borderBox}>
          <span className={styles.borderText}>Кол-во лет</span>
          <span className={styles.valueBox}>0 лет</span>
        </div>
        <div className={styles.borderBox}>
          <span className={styles.borderText}>Кол-во месяцев</span>
          <span className={styles.valueBox}>0 мес</span>
        </div>
        <button className={styles.button}>Подходит</button>
      </div>
    </div>
  </div>
);

export default PrognosisBuy;
