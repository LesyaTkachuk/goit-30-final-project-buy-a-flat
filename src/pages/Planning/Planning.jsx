import React, { Component } from 'react';
import styles from './Planning.module.css';
import PrognosisBuy from '../../components/PrognosisBuy';
import PlanForm from '../../components/PlanForm';

class Planning extends Component {
  render() {
    return (
      <div className={styles.planningPage}>
        <div className={styles.wrapper}>
          <div className={styles.planForm}>
            <PlanForm />
          </div>
          <div className={styles.prognosis}>
            <PrognosisBuy />
          </div>
        </div>
      </div>
    );
  }
}

export default Planning;
