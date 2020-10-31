import React from 'react';
import { connect } from 'react-redux';
import { familyOperations, familySelectors } from '../../redux/family';
import styles from './VisualizationApartment.module.css';
import flat from '../../assets/images/plan.png';

const VisualizationApartment = () => {
  return (
    <>
      <div className={styles.wrp}>
        <div className={styles.progress} style={{ width: '60%' }} />
        <img className={styles.img} src={flat} alt="" />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisualizationApartment);
