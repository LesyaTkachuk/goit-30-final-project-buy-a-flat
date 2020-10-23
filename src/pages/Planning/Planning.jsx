import React, { Component } from 'react';
import styles from './Planning.module.css';

export default class Planning extends Component {
  render() {
    const [PlanForm, PrognosisBuy] = this.props.children;
    return (
      <div className={styles.planningPage}>
        <div className={styles.wrapper}>
          <div className={styles.planForm}>{PlanForm}</div>
          <div className={styles.prognosis}>{PrognosisBuy}</div>
        </div>
      </div>
    );
  }
}
