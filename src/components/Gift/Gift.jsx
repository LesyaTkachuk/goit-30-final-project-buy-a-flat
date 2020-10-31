import React, { Component } from 'react';
import GiftNotification from '../GiftNotification';
import Modal from '../common/Modal';
import { connect } from 'react-redux';
import styles from './Gift.module.css';
import localCurrency from '../../assets/icons/local_currency.svg';
import gift from '../../assets/images/gift.svg';
import click from '../../assets/images/click.svg';
import { globalActions, globalSelectors } from '../../redux/global';
import familySelectors from '../../redux/family/familySelectors';
import { familyOperations } from '../../redux/family';

class Gift extends Component {
  componentDidMount() {
    const { giftsForUnpacking, toggleHasGifts } = this.props;
    giftsForUnpacking && toggleHasGifts();
  }

  componentDidUpdate(prevProps) {
    const { giftsForUnpacking, toggleHasGifts, giftsUnpacked } = this.props;
    if (prevProps.giftsForUnpacking === giftsForUnpacking) return;
    giftsForUnpacking && !giftsUnpacked && toggleHasGifts();
  }

  render() {
    const {
      hasGifts,
      giftsForUnpacking,
      giftsUnpacked,
      onGiftClick,
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          {hasGifts ? (
            <p className={styles.text}>
              Поздравляем, за прошлый месяц вы накопили на{' '}
              <span className={styles.colorText}>
                {giftsForUnpacking + giftsUnpacked} кв.м
              </span>{' '}
              вашей будущей квартиры! Кликните{' '}
              <span className={styles.colorText}>{giftsForUnpacking}</span> раз.
            </p>
          ) : (
            <p className={styles.text}>
              Дождитесь окончания месяца чтобы узнать сколько квадратных метров
              вы накопили на вашу будущую квартиру.
            </p>
          )}
          {/* 
          <div className={styles.sumContainer}>
            <p className={styles.sum}>14000</p>
            <img src={localCurrency} alt="local currency" width="20" />
          </div> */}
        </div>
        {hasGifts ? (
          <div
            className={styles.activeGiftContainer}
            onClick={() => onGiftClick()}
          >
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
        {hasGifts && !giftsForUnpacking && (
          <Modal>
            <GiftNotification />
          </Modal>
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

const mapDispatchToProps = {
  onGiftClick: familyOperations.updateGifts,
  toggleHasGifts: globalActions.toggleHasGifts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
