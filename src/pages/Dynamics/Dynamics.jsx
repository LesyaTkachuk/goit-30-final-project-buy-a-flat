import React from 'react';
import Chart from '../../components/common/Chart';
import styles from './Dynamics.module.css';

export default function Dynamics() {
  return (
    <div className={styles.inner}>
      <div className={styles.part}>
        <Chart />

        <div className={styles.plan}>
          {/* Подставить компонент */}
          {/* 21. MonthlyExecutionPlan */}
        </div>
      </div>

      <div className={styles.part}>
        <div className={styles.flex}>
          <div className={styles.apartment}>
            {/* Подставить компонент */}
            {/* 22. VisualizationApartment */}
          </div>

          <div className={styles.progress}>
            {/* Подставить компонент */}
            {/* 23. ProgressInfo */}
          </div>
        </div>

        <div className={styles.gift}>
          {/* Подставить компонент */}
          {/* 24. GiftСompleting */}
        </div>
      </div>
    </div>
  );
}
