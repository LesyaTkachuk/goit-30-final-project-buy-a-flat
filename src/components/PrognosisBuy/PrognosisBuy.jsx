import React, { Component } from 'react';
import { connect } from 'react-redux';
import { familyOperations, familySelectors } from '../../redux/family';
import styles from './PrognosisBuy.module.css';

class PrognosisBuy extends Component {
  handleClick = () => {
    this.props.addFamily(this.props.family);
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
  family: familySelectors.getFamilyInfo(state),
});

const mapDispatchToProps = {
  addFamily: familyOperations.addFamily,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrognosisBuy);
