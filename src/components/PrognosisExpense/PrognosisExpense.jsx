import React from 'react';
import styles from './PrognosisExpense.module.css';

export default function PrognosisExpense() {
  return (
    <div className={styles.wrp}>
      <div className={styles.inner}>
        <p className={styles.value}>-600 &#x20B4;</p>
        <p className={styles.small}>Лимит на день</p>
      </div>

      <div className={styles.inner}>
        <p className={styles.value}>-5000 &#x20B4;</p>
        <p className={styles.small}>Отклонение от плановой суммы накопления</p>
      </div>

      <button className={styles.btn} type="button">
        Готово
      </button>
    </div>
  );
}
