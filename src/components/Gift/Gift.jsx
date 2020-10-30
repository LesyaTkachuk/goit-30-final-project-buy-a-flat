import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Gift.module.css';
import localCurrency from '../../assets/icons/local_currency.svg';
import gift from '../../assets/images/gift.svg';
import click from '../../assets/images/click.svg';
import { globalSelectors } from '../../redux/global';
import familySelectors from '../../redux/family/familySelectors';

class Gift extends Component {
  render() {
    const { hasGifts, giftsForUnpacking, giftsUnpacked } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          {hasGifts ? (
            <p className={styles.text}>
              Поздравляем, за прошлый месяц вы накопили денег на
              <span className={styles.colorText}>
                {giftsForUnpacking - giftsUnpacked} кв.м
              </span>{' '}
              на вашу будущюю квартиру! Кликните на ваш виртуальный подарок{' '}
              <span className={styles.colorText}>
                {giftsForUnpacking - giftsUnpacked} кв.м
              </span>{' '}
              раз.
            </p>
          ) : (
            <p className={styles.text}>
              Дождитесь окончания месяца чтобы узнать сколько квадратных метров
              вы накопили на вашу будущую квартиру.
            </p>
          )}

          <div className={styles.sumContainer}>
            <p className={styles.sum}>14000</p>
            <img src={localCurrency} alt="local currency" width="20" />
          </div>
        </div>
        {hasGifts ? (
          <div className={styles.activeGiftContainer}>
            <img
              className={styles.giftImgActive}
              src={gift}
              alt="gift-active"
            />
            <div className={styles.clickContainer}>
              <img className={styles.clickImg} src={click} alt="click" />
            </div>
          </div>
        ) : (
          <img
            className={styles.inactiveGiftImg}
            src={gift}
            alt="gift-inactive"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasGifts: globalSelectors.getHasGifts(state),
  giftsForUnpacking: familySelectors.getGiftsForUnpacking(state),
  giftsUnpacked: familySelectors.getGiftsUnpacked(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
