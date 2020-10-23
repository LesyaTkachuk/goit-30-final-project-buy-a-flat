import React from 'react';
import styles from './Gift.module.css';
import localCurrency from '../../assets/icons/local_currency.svg';
import gift from '../../assets/images/gift.svg';
import click from '../../assets/images/click.svg.svg';

function Gift() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Чтобы добавить еще <span className={styles.colorText}>1 кв.м</span> на
          планировку, осталось накопить
        </p>
        <div className={styles.sumContainer}>
          <p className={styles.sum}>14000</p>
          <img src={localCurrency} alt="local currency" width="20" />
        </div>
      </div>
      {/* <img className={styles.inactiveGiftImg} src={gift} alt="gift-inactive" /> */}
      <div className={styles.activeGiftContainer}>
        <img className={styles.giftImgActive} src={gift} alt="gift-active" />
        <div className={styles.clickContainer}>
          <img className={styles.clickImg} src={click} alt="click" />
        </div>
      </div>
    </div>
  );
}

export default Gift;
