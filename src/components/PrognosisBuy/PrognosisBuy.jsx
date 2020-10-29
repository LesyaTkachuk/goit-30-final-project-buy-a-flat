import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { familyOperations, familySelectors } from '../../redux/family';
import { globalSelectors } from '../../redux/global';
import styles from './PrognosisBuy.module.css';

class PrognosisBuy extends Component {
  handleClick = () => {
    const {
      addFamily,
      updateFamily,
      familyId,
      family,
      getCurrentUser,
    } = this.props;
    console.log('family Id', familyId);
    if (familyId) {
      console.log('id', familyId);
      updateFamily(family);
    } else {
      console.log('here');
      addFamily(family);
      getCurrentUser();
    }
  };

  render() {
    return (
      <div className={styles.componentBlock}>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>У вас будет квартира через:</p>
          <div className={styles.innerWrapper}>
            <div className={styles.borderBox}>
              <span className={styles.borderText}>Кол-во лет</span>
              <span className={styles.valueBox}>0 лет</span>
            </div>
            <div className={styles.borderBox}>
              <span className={styles.borderText}>Кол-во месяцев</span>
              <span className={styles.valueBox}>0 мес</span>
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={this.handleClick}
            >
              Подходит
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  familyId: authSelectors.getFamilyId(state),
  family: familySelectors.getFamilyInfo(state),
});

const mapDispatchToProps = {
  addFamily: familyOperations.addFamily,
  updateFamily: familyOperations.updateFamily,
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisBuy);
