import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  familyActions,
  familyOperations,
  familySelectors,
} from '../../redux/family';
import { globalActions, globalSelectors } from '../../redux/global';
import Calculator from '../Calculator';
import styles from './ExpenseForm.module.css';

class ExpensesForm extends Component {
  state = {
    transaction: {
      comment: '',
      category: '',
      amount: '',
    },
    balance: '',
    disabledButton: false,
  };

  componentDidMount() {
    const { familyBalance, transactionCategories } = this.props;

    if (familyBalance) {
      this.setState({
        balance: familyBalance,
      });
    }

    if (transactionCategories.length === 0) {
      this.props.getCategories();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.transactionAmount !== prevProps.transactionAmount) {
      this.setState(prevState => ({
        transaction: {
          ...prevState.transaction,
          amount: this.props.transactionAmount,
        },
      }));
    }
  }

  handleInput = e => {
    const { name, value } = e.target;
    const limit = e.target.dataset.limit;

    if (value.length <= Number(limit)) {
      this.setState(prevState => ({
        transaction: { ...prevState.transaction, [name]: value },
      }));

      if (this.state.disabledButton) {
        this.setState({ disabledButton: false });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setTransaction(this.state.transaction);
    this.setState({ disabledButton: true });
  };

  render() {
    const { balance, transaction, disabledButton } = this.state;

    const {
      transactionCategories,
      setCalculatorOpen,
      isCalculatorOpen,
    } = this.props;

    return (
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="balance">
              Сумма на счету
            </label>
            <input
              className={styles.formInput}
              type="number"
              name="balance"
              id="balance"
              value={balance}
              readOnly
            />
            {/* <label className={styles.formLabel} htmlFor="account">
              Остаток на счете:
            </label> */}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="comment">
              Комментарий
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="comment"
              id="comment"
              data-limit="40"
              value={transaction.comment}
              onChange={this.handleInput}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="category">
              На категорию
            </label>
            <select
              className={styles.formInput}
              name="category"
              id="category"
              data-limit="40"
              value={transaction.category}
              onChange={this.handleInput}
            >
              {transactionCategories &&
                transactionCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="amount">
              Сумма
            </label>
            <input
              className={styles.formInput}
              type="number"
              name="amount"
              id="amount"
              data-limit="6"
              value={transaction.amount}
              onChange={this.handleInput}
              placeholder="00.00"
            />
            <span
              className={styles.calculatorIcon}
              onClick={() => setCalculatorOpen()}
            ></span>
          </div>
        </form>
        {isCalculatorOpen && (
          <div className={styles.calculatorWrapper}>
            <Calculator />
          </div>
        )}
        <button
          disabled={disabledButton}
          className={styles.formButton}
          onClick={this.handleSubmit}
        >
          Раcсчитать
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  familyBalance: familySelectors.getFamilyBalance(state),
  transactionCategories: familySelectors.getTransactionCategories(state),
  transactionAmount: familySelectors.getTransactionAmount(state),
  isCalculatorOpen: globalSelectors.getIsCalculatorOpen(state),
});

const mapDispatchToProps = {
  getCategories: familyOperations.getTransactions,
  setTransaction: familyActions.setTransaction,
  setCalculatorOpen: globalActions.toggleCalculator,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
