/* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import Media from 'react-media';
import LogoutButton from '../LogoutButton';
import avatar from '../../assets/icons/avatar.svg';
import styles from './UserInfo.module.css';
import { globalSelectors } from '../../redux/global';
import { Link } from 'react-router-dom';

function UserInfo({ showNavPage }) {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt="user icon" className={styles.avatar} />
      <Media
        query="(max-width: 1239px)"
        render={() =>
          showNavPage ? (
            <button className={`${styles.button} ${styles.closeIcon}`}></button>
          ) : (
            <Link to="/navigation">
              <button
                className={`${styles.button} ${styles.menuIcon}`}
              ></button>
            </Link>
          )
        }
      />
      <Media
        query="(min-width: 1240px)"
        render={() => <p className={styles.userName}>UserName</p>}
      />
      <Media query="(min-width: 1240px)" render={() => <LogoutButton />} />
    </div>
  );
}

const mapStateToprops = state => ({
  showNavPage: globalSelectors.getShowNavPage(state),
});

export default connect(mapStateToprops)(UserInfo);
