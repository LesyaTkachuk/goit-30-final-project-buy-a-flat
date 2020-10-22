import React, { Component } from 'react';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import UserInfo from '../UserInfo';
import styles from './HeaderContent.module.css';

class HeaderContent extends Component {
  render() {
    return (
      <div className={styles.headerContentWrapper}>
        {window.innerWidth >= 1240 && <NavigationBar />}
        <Logo />
        <UserInfo />
      </div>
    );
  }
}
export default HeaderContent;
