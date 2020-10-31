import React from 'react';
import { connect } from 'react-redux';
import { familyOperations, familySelectors } from '../../redux/family';
import styles from './ProgressInfo.module.css';

const ProgressInfo = () => {
  return (
    <>
      <p className={styles.total}>
        Через <strong>4 года 1 месяц</strong>
      </p>

      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.left}>Накоплено, %:</td>
            <td className={styles.right}>28%</td>
          </tr>
          <tr>
            <td className={styles.left}>Накоплено, грн:</td>
            <td className={styles.right}>60 000 &#x20B4;</td>
          </tr>
          <tr>
            <td className={styles.left}>А это:</td>
            <td className={styles.right}>2 кв. м</td>
          </tr>
        </tbody>
      </table>

      <p className={styles.meters}>
        <span>22</span> из <span>60 кв.м</span> накоплено
      </p>

      <div className={styles.line}>
        <div className={styles.progress} style={{ width: '60%' }} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  transaction: familySelectors.getTransaction(state),
});

const mapDispatchToProps = {
  createTransaction: familyOperations.createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressInfo);
