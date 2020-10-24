import React, { Component } from 'react';
import styles from './Expenses.module.css';
import ExpenseForm from '../../components/ExpenseForm';
import PrognosisExpense from '../../components/PrognosisExpense';

class ExpensesPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ExpenseForm />
        <PrognosisExpense />
      </div>
    );
  }
}

export default ExpensesPage;
