import React, { Component } from 'react';
import { connect } from 'react-redux';
import { familyOperations, familySelectors } from '../../redux/family';
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
    isClicked: false,
    disabledButton: false,
  };

  componentDidMount() {
    const { familyBalance, transactionCategories } = this.props;

    if (familyBalance) {
      this.setState({ balance: familyBalance });
    }

    if (!transactionCategories) {
      this.props.getCategories();
    }
  }

  handleClick(e) {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  }

  handleInput = e => {
    const { name, value } = e.target;
    // this.setState({ [name]: value });

    this.setState(prevState => ({
      transaction: { ...prevState.transaction, [name]: value },
    }));

    if (this.state.disabledButton) {
      this.setState({ disabledButton: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.transaction(this.state);
    this.setState({ disabledButton: true });
  };

  render() {
    const { balance, transaction, isClicked, disabledButton } = this.state;
    const { transactionCategories } = this.props;

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
              value={transaction.category}
              onChange={this.handleInput}
            >
              {transactionCategories &&
                transactionCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              {/* <option value="entertainment">Развлечения</option>
              <option value="health">Здоровье</option>
              <option value="products">Продукты</option>
              <option value="transport">Транспорт</option>
              <option value="sport">Спорт</option>
              <option value="clothes">Одежда</option> */}
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
              className={styles.calculatorBtn}
              onClick={this.handleClick.bind(this)}
            ></span>
          </div>
        </form>
        {isClicked && (
          <div className={styles.calculator}>
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
  // transaction: familySelectors.getTransaction(state),
});

const mapDispatchToProps = {
  getCategories: familyOperations.getTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
