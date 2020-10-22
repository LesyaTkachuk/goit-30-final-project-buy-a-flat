import React, { Component } from 'react';
import styles from './Planning.module.css';

export default class Planning extends Component {
  render() {
    const [PlanForm, Prognosis] = this.props.children;
    return (
      <div className={styles.wrapper}>
      <div className={styles.planForm}>
          {PlanForm}
      </div>
      <div className={styles.prognosis}>
    {Prognosis}
          </div>
    </div>
    );
  }
}