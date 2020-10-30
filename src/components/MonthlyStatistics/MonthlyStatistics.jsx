import React from 'react';
import styles from './MonthlyStatistics.module.css';

class MonthlySavings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: '0',
      currentYear: '2020',
      chartMonth: '0',
      chartYear: '2020',
    };
  }

  componentDidMount() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    this.setState({
      currentMonth,
      currentYear,
      chartMonth: currentMonth,
      chartYear: currentYear,
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <label className={styles.monthSelectLabel} htmlFor="month">
          Месяц
        </label>
        <select className={styles.monthSelect} name="month" id="month">
          <option value="0">Октябрь 2020</option>
          <option value="1">Сентябрь 2020</option>
          <option value="2">Август 2020</option>
          <option value="3">Июль 2020</option>
          <option value="4">Июнь 2020</option>
          <option value="5">Май 2020</option>
          <option value="6">Апрель 2020</option>
          <option value="7">Март 2020</option>
          <option value="8">Февраль 2020</option>
          <option value="9">Январь 2020</option>
          <option value="10">Декабрь 2019</option>
          <option value="11">Ноябрь 2019</option>
          <option value="12">Октябрь 2019</option>
          <option value="13">Сентябрь 2019</option>
          <option value="14">Август 2019</option>
          <option value="15">Июль 2019</option>
          <option value="16">Июнь 2019</option>
          <option value="17">Май 2019</option>
          <option value="18">Апрель 2019</option>
          <option value="19">Март 2019</option>
          <option value="20">Февраль 2019</option>
          <option value="21">Январь 2019</option>
          <option value="22">Декабрь 2018</option>
          <option value="23">Декабрь 2018</option>
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

export default MonthlySavings;
