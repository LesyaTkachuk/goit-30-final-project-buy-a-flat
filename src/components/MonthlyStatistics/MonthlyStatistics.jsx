import React from 'react';
import styles from './MonthlyStatistics.module.css';

function MonthlySavings() {
  return (
    <div className={styles.container}>
      <label className={styles.monthSelectLabel} for="month">
        Месяц
      </label>
      <select className={styles.monthSelect} name="month" id="month">
        <option value="0">Октябрь 2020</option>
        <option value="1">Сентябрь 2020</option>
        <option value="2">Август 2020</option>
        <option value="3">Июль 2020</option>
        <option value="4">Июнь 2020</option>
        <option value="5">Май 2020</option>
      </select>

      <ul className={styles.statParam}>
        <li className={styles.statParamItem}>
          <p className={styles.statParamName}>Доходы, &#8372;</p>
          <p className={styles.statParamValue}>80000</p>
        </li>
        <li className={styles.statParamItem}>
          <p className={styles.statParamName}>Расходы, &#8372;</p>
          <p className={styles.statParamValue}>40000</p>
        </li>
        <li className={styles.statParamItem}>
          <p className={styles.statParamName}>Накоплено, &#8372;</p>
          <p className={styles.statParamValue}>40000</p>
        </li>
        <li className={styles.statParamItem}>
          <p className={styles.statParamName}>План, &#8372;</p>
          <p className={styles.statParamValue}>50000</p>
        </li>
        <li className={styles.statParamItem}>
          <p className={styles.statParamName}>План, %</p>
          <p className={styles.statParamValue}>80</p>
        </li>
      </ul>
    </div>
  );
}

export default MonthlySavings;
