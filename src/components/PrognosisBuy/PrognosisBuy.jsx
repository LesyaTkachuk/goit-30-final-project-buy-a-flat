import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import {
  familyOperations,
  familySelectors,
  familyActions,
} from '../../redux/family';
import { globalActions, globalSelectors } from '../../redux/global';
import styles from './PrognosisBuy.module.css';
import { Link } from 'react-router-dom';

class PrognosisBuy extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.family === this.props.family) {
      return;
    }

    const { countMonthsLeft, countYearsLeft } = this.props;
    countMonthsLeft(this.leftYearMonth());
    countYearsLeft(this.leftYearMonth());
  }

  leftYearMonth = () => {
    const {
      totalSalary,
      passiveIncome,
      balance,
      flatPrice,
      incomePercentageToSavings,
    } = this.props.family;
    const allIncome = Number(totalSalary) + Number(passiveIncome);
    const percent = (allIncome * Number(incomePercentageToSavings)) / 100;
    const leftToAcc = Number(flatPrice) - Number(balance);
    const monthsLeft = leftToAcc / percent;
    const years = Math.floor(monthsLeft / 12);
    const months = Math.ceil(monthsLeft % 12);
    return { months, years };
  };

  handleClick = () => {
    const { addFamily, updateFamily, familyId, family } = this.props;

    const {
      flatPrice,
      flatSquareMeters,
      totalSalary,
      passiveIncome,
      incomePercentageToSavings,
    } = family;

    if (familyId) {
      updateFamily({
        flatPrice,
        flatSquareMeters,
        totalSalary,
        passiveIncome,
        incomePercentageToSavings,
      });
    } else {
      if (totalSalary) {
        addFamily(family);
      }
    }
  };

  render() {
    const { yearsLeft, monthsLeft, isPlanButtonActive, familyId } = this.props;
    return (
      <div className={styles.componentBlock}>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>У вас будет квартира через:</p>
          <div className={styles.innerWrapper}>
            <div className={styles.borderBox}>
              <span className={styles.borderText}>Кол-во лет</span>
              <span className={styles.valueBox}>{yearsLeft}</span>
            </div>
            <div className={styles.borderBox}>
              <span className={styles.borderText}>Кол-во месяцев</span>
              <span className={styles.valueBox}>{monthsLeft}</span>
            </div>
            {familyId ? (
              <Link
                to="/expenses"
                className={
                  !isPlanButtonActive
                    ? `${styles.button} ${styles.disabled}`
                    : `${styles.button}`
                }
                onClick={this.handleClick}
              >
                Подходит
              </Link>
            ) : (
              <button
                className={
                  !isPlanButtonActive
                    ? `${styles.button} ${styles.disabled}`
                    : `${styles.button}`
                }
                onClick={this.handleClick}
              >
                Подходит
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
  family: familySelectors.getFamilyInfo(state),
  monthsLeft: familySelectors.getMonthsLeft(state),
  yearsLeft: familySelectors.getYearsLeft(state),
  isPlanButtonActive: globalSelectors.getIsPlanBtnActive(state),
});

const mapDispatchToProps = {
  addFamily: familyOperations.addFamily,
  updateFamily: familyOperations.updateFamily,
  getCurrentUser: authOperations.getCurrentUser,
  countMonthsLeft: familyActions.countMonthsLeft,
  countYearsLeft: familyActions.countYearsLeft,
  togglePlanBtnActive: globalActions.togglePlanBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisBuy);
