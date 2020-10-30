import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  familyOperations,
  familySelectors,
} from '../../redux/family';
import styles from './PrognosisExpense.module.css';

class PrognosisExpense extends Component {
  render() {
    return (
      <div className={styles.wrp}>
        <div className={styles.inner}>
          <p className={styles.value}>-600 &#x20B4;</p>
          <p className={styles.small}>Лимит на день</p>
        </div>

        <div className={styles.inner}>
          <p className={styles.value}>-5000 &#x20B4;</p>
          <p className={styles.small}>
            Отклонение от плановой суммы накопления
          </p>
        </div>

        <button
          className={styles.btn}
          onClick={() => this.props.createTransaction(this.props.transaction)}
          type="button"
        >
          Готово
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transaction: familySelectors.getTransaction(state),
});

const mapDispatchToProps = {
  createTransaction: familyOperations.createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisExpense);
