import React, { Component } from 'react';
import styles from './PlanForm.module.css';

class PlanForm extends Component {
  state = {
    sallary: '',
    passIncome: '',
    savings: '',
    flatPrice: '',
    sqm: '',
    savingPercent: '',
  };

  handleSallary = e => {
    this.setState({ sallary: e.target.value });
  };

  handlePassIncome = e => {
    this.setState({ passIncome: e.target.value });
  };

  handleSavings = e => {
    this.setState({ savings: e.target.value });
  };

  handleFlatPrice = e => {
    this.setState({ flatPrice: e.target.value });
  };

  handleSqm = e => {
    this.setState({ sqm: e.target.value });
  };

  handleSavingPercent = e => {
    this.setState({ savingPercent: e.target.value });
  };

  render() {
    return (
      <form className={styles.planTable}>
        <div className={styles.leftWrapper}>
          <div className={styles.planTable__item}>
            <label>1. ЗП обоих супругов</label>
            <input
              type="number"
              value={this.state.sallary}
              onChange={this.handleSallary}
            />
          </div>
          <div className={styles.planTable__item}>
            <label>2. Пассивные доходы, мес.</label>
            <input
              type="number"
              value={this.state.passIncome}
              onChange={this.handlePassIncome}
            />
          </div>
          <div className={styles.planTable__item}>
            <label>3. Сбережения</label>
            <input
              type="number"
              value={this.state.savings}
              onChange={this.handleSavings}
            />
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.planTable__item}>
            <label>4. Укажите стоимость вашей будущей квартиры</label>
            <input
              type="number"
              value={this.state.flatPrice}
              onChange={this.handleFlatPrice}
            />
          </div>
          <div className={styles.planTable__item}>
            <label>5. Укажите кол-во кв. м. вашей будущей квартиры</label>
            <input
              type="number"
              value={this.state.sqm}
              onChange={this.handleSqm}
            />
          </div>
          <div className={styles.planTable__item}>
            <label>6. Накопление, %</label>
            <input
              type="number"
              value={this.state.savingPercent}
              onChange={this.handleSavingPercent}
            />
          </div>
          <p className={styles.planTable__text}>
            Укажите процент, который бы хотели накапливать в месяц от общей
            суммы доходов и вы увидите, когда достигните цели
          </p>
        </div>
      </form>
    );
  }
}

export default PlanForm;
