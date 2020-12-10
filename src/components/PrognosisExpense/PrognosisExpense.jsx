import React from 'react';
import { connect } from 'react-redux';
import { familyOperations, familySelectors } from '../../redux/family';
import styles from './PrognosisExpense.module.css';
import { globalActions, globalSelectors } from '../../redux/global';

const PrognosisExpense = ({
  transaction,
  createTransaction,
  setExpenseBtnActive,
  isExpenseBtnActive,
  dayLimit,
  monthLimit,
}) => {
  const handleClick = () => {
    createTransaction(transaction);
    setExpenseBtnActive();
  };

  return (
    <div className={styles.wrp}>
      <div className={styles.inner}>
        <p className={styles.value}>{Number(dayLimit).toFixed(2)} &#x20B4;</p>
        <p className={styles.small}>Лимит на день</p>
      </div>

      <div className={styles.inner}>
        <p className={styles.value}>{Number(monthLimit).toFixed(2)} &#x20B4;</p>
        <p className={styles.small}>Отклонение от плановой суммы накопления</p>
      </div>

      <button
        disabled={!isExpenseBtnActive}
        className={styles.btn}
        onClick={handleClick}
        type="button"
      >
        Готово
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  dayLimit: familySelectors.getDailyLimit(state),
  monthLimit: familySelectors.getMonthLimit(state),
  transaction: familySelectors.getTransaction(state),
  isExpenseBtnActive: globalSelectors.getIsExpenseBtnActive(state),
});

const mapDispatchToProps = {
  createTransaction: familyOperations.createTransaction,
  setExpenseBtnActive: globalActions.toggleExpenseBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisExpense);
