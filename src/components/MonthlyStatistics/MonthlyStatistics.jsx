import React from 'react';
import { connect } from 'react-redux';
import { globalActions } from '../../redux/global';
import { familySelectors } from '../../redux/family';
import styles from './MonthlyStatistics.module.css';

class MonthlySavings extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    const prevMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    this.props.setCurrentMonth(prevMonth);
    this.props.setCurrentYear(currentYear);
    this.props.setChartMonth(prevMonth);
    this.props.setChartYear(currentYear);
  }

  handleSelectChange() {
    const indexOfSelectedOption = document.getElementById('month').options
      .selectedIndex;
    const textOfSelectedOption = document.getElementById('month').options[
      indexOfSelectedOption
    ].text;
    const dateArray = textOfSelectedOption.split(' ');

    switch (dateArray[0]) {
      case 'Январь':
        this.props.setChartMonth(1);
        this.props.setChartYear(Number(dateArray[1]));
        break;

      case 'Февраль':
        this.props.setChartMonth(2);
        this.props.setChartYear(Number(dateArray[1]));
        break;

      case 'Март':
        this.props.setChartMonth(3);
        this.props.setChartYear(Number(dateArray[1]));
        break;

      case 'Апрель':
        this.props.setChartMonth(4);
        this.props.setChartYear(Number(dateArray[1]));
        break;

      case 'Май':
        this.props.setChartMonth(5);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Июнь':
        this.props.setChartMonth(6);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Июль':
        this.props.setChartMonth(7);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Август':
        this.props.setChartMonth(8);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Сентябрь':
        this.props.setChartMonth(9);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Октябрь':
        this.props.setChartMonth(10);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Ноябрь':
        this.props.setChartMonth(11);
        this.props.setChartYear(Number(dateArray[1]));
        break;
      case 'Декабрь':
        this.props.setChartMonth(12);
        this.props.setChartYear(Number(dateArray[1]));
        break;

      default:
        this.props.setChartMonth(new Date().getMonth() + 1);
        this.props.setChartYear(new Date().getFullYear());
    }

    console.log(this.props.data);
  }

  render() {
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
          <option value="0">Ноябрь 2020</option>
          <option value="1">Октябрь 2020</option>
          <option value="2">Сентябрь 2020</option>
          <option value="3">Август 2020</option>
          <option value="4">Июль 2020</option>
          <option value="5">Июнь 2020</option>
          <option value="6">Май 2020</option>
          <option value="7">Апрель 2020</option>
          <option value="8">Март 2020</option>
          <option value="9">Февраль 2020</option>
          <option value="10">Январь 2020</option>
          <option value="11">Декабрь 2019</option>
          <option value="12">Ноябрь 2019</option>
          <option value="13">Октябрь 2019</option>
          <option value="14">Сентябрь 2019</option>
          <option value="15">Август 2019</option>
          <option value="16">Июль 2019</option>
          <option value="17">Июнь 2019</option>
          <option value="18">Май 2019</option>
          <option value="19">Апрель 2019</option>
          <option value="20">Март 2019</option>
          <option value="21">Февраль 2019</option>
          <option value="22">Январь 2019</option>
          <option value="23">Декабрь 2018</option>
          <option value="24">Ноябрь 2018</option>
        </select>

        <ul className={styles.statParam}>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>Доходы, &#8372;</p>
            <p className={styles.statParamValue}>80000</p>
          </li>
          <li className={styles.statParamItem}>
            <p className={styles.statParamName}>Расходы, &#8372;</p>
            <p className={styles.statParamValue}>40000</p>
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
});

const mapDispatchToProps = {
  setCurrentMonth: globalActions.currentMonth,
  setCurrentYear: globalActions.currentYear,
  setChartMonth: globalActions.chartMonth,
  setChartYear: globalActions.chartYear,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySavings);
