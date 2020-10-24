import React, { Component } from 'react';
import styles from './Expenses.module.css';
import ExpenseForm from '../../components/ExpenseForm';

class ExpensesPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ExpenseForm />
      </div>
    );
  }
}

export default ExpensesPage;
