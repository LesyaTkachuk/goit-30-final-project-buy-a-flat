import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Expenses.module.css';
import ExpenseForm from '../../components/ExpenseForm';
import PrognosisExpense from '../../components/PrognosisExpense';
import { globalActions } from '../../redux/global';

class ExpensesPage extends Component {
  componentDidMount() {
    this.props.toggleShowExpensesPage();
  }

  componentWillUnmount() {
    this.props.toggleShowExpensesPage();
  }
  render() {
    return (
      <div className={styles.container}>
        <ExpenseForm />
        <PrognosisExpense />
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleShowExpensesPage: globalActions.toggleShowExpensesPage,
};

export default connect(null, mapDispatchToProps)(ExpensesPage);
