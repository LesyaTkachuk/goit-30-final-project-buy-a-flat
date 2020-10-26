import React, { Component } from 'react';
import styles from './ExpenseForm.module.css';

class ExpensesForm extends Component {
  state = {
    account: '',
    expenseName: '',
    category: '',
    amount: '',
  };

  handleAccount = e => {
    this.setState({ account: e.target.value });
  };

  handleExpenseName = e => {
    this.setState({ expenseName: e.target.value });
  };

  handleCategory = e => {
    this.setState({ category: e.target.value });
  };

  handleAmount = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { account, expenseName, category, amount } = this.state;
    return (
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="account">
              {/* Со счета  */}
              Сумма на счету
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="account"
              id="account"
              value={account}
              onChange={this.handleAccount}
              readOnly
            />
            {/* <label className={styles.formLabel} htmlFor="account">
              Остаток на счете:
            </label> */}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} htmlFor="expense-name">
              Название статьи
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="expense-name"
              id="expense-name"
              value={expenseName}
              onChange={this.handleExpenseName}
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
              value={category}
              onChange={this.handleCategory}
            >
              <option value="entertainment">Развлечения</option>
              <option value="health">Здоровье</option>
              <option value="products">Продукты</option>
              <option value="transport">Транспорт</option>
              <option value="sport">Спорт</option>
              <option value="clothes">Одежда</option>
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
              value={amount}
              onChange={this.handleAmount}
              placeholder="00.00"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ExpensesForm;
