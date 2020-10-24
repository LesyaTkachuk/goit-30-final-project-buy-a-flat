import React, { Component } from 'react';
import styles from './ExpenseForm.module.css';

class ExpensesForm extends Component {
  render() {
    return (
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <div className={styles.formItem}>
            <label className={styles.formLabel} for="account">
              {/* Со счета  */}
              Сумма на счету
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="account"
              id="account"
              value="100.00"
              readOnly
            />
            {/* <label className={styles.formLabel} for="account">
              Остаток на счете:
            </label> */}
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} for="cost-item">
              Название статьи
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="cost-item"
              id="cost-item"
              value="Билеты на концерт"
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} for="category">
              На категорию
            </label>
            <select className={styles.formInput} name="category" id="category">
              <option value="entertainment">Развлечения</option>
              <option value="health">Здоровье</option>
              <option value="products">Продукты</option>
              <option value="transport">Транспорт</option>
              <option value="sport">Спорт</option>
              <option value="clothes">Одежда</option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formLabel} for="sum">
              Сумма
            </label>
            <input
              className={styles.formInput}
              type="text"
              name="amount"
              id="amount"
              placeholder="00.00"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ExpensesForm;
