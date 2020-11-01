import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { familyOperations, familySelectors } from '../../redux/family';
import styles from './PrognosisExpense.module.css';

const PrognosisExpense = ({ transaction, info, createTransaction }) => {
  const daysToMonthEnd = moment().daysInMonth() - new Date().getDate() + 1;
  const alreadySpent = 0; //: TEMP

  const income = info.totalSalary + info.passiveIncome;
  const available =
    ((income - alreadySpent) * (100 - info.incomePercentageToSavings)) / 100;
  const dailySum = available / daysToMonthEnd;

  const dailyLimit = (dailySum - Number(transaction.amount)).toFixed(2);
  const monthLimit = (available - Number(transaction.amount)).toFixed(2);

  const handleClick = () => {
    createTransaction(transaction);
  };
  return (
    <div className={styles.wrp}>
      <div className={styles.inner}>
        <p className={styles.value}>{dailyLimit} &#x20B4;</p>
        <p className={styles.small}>Лимит на день</p>
      </div>

      <div className={styles.inner}>
        <p className={styles.value}>{monthLimit} &#x20B4;</p>
        <p className={styles.small}>Отклонение от плановой суммы накопления</p>
      </div>

      <button className={styles.btn} onClick={handleClick} type="button">
        Готово
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  transaction: familySelectors.getTransaction(state),
  info: familySelectors.getFamilyInfo(state),
});

const mapDispatchToProps = {
  createTransaction: familyOperations.createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisExpense);


