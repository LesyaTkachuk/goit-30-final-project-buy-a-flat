import React, { Component } from 'react';
import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../redux/global';
import { familySelectors, familyOperations } from '../../redux/family';
import styles from './MonthlyStatistics.module.css';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

class MonthlySavings extends Component {
  componentDidMount() {
    this.props.getChartData();
  }

  componentDidUpdate(prevProps) {
    const { chartDate, getChartData } = this.props;
    if (
      prevProps.chartDate.month !== chartDate.month ||
      prevProps.chartDate.year !== chartDate.year
    ) {
      getChartData();
    }
  }

  handleSelectChange = e => {
    const { setChartMonth, setChartYear, data } = this.props;
    setChartMonth(data[e.target.value].month);
    setChartYear(data[e.target.value].year);
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
        <label className={styles.monthSelectLabel} htmlFor="month">
          Месяц
        </label>
        <select
          className={styles.monthSelect}
          onChange={this.handleSelectChange}
          name="month"
          id="month"
        >
          {data?.map((item, index) => (
            <option key={item._id} value={index}>
              {`${MONTHS[item.month - 1]} ${item.year}`}
            </option>
          ))}
        </select>

        <ul className={styles.statParam}>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>Доходы, &#8372;</p>
            <p className={styles.statParamValue}>
              {!!data && data[0].incomeAmount}
            </p>
          </li>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>Расходы, &#8372;</p>
            <p className={styles.statParamValue}>
              {!!data && data[0].incomeAmount}
            </p>
          </li>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>Накоплено, &#8372;</p>
            <p className={styles.statParamValue}>40000</p>
          </li>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>План, &#8372;</p>
            <p className={styles.statParamValue}>50000</p>
          </li>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>План, %</p>
            <p className={styles.statParamValue}>80</p>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: familySelectors.getChartData(state),
  chartDate: globalSelectors.getChartDate(state),
});

const mapDispatchToProps = {
  getChartData: familyOperations.getChartData,
  setChartMonth: globalActions.chartMonth,
  setChartYear: globalActions.chartYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySavings);
