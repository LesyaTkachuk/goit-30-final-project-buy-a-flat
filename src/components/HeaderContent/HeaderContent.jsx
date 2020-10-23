import React, { Component } from 'react';
import AuthButtonsWrapper from '../AuthButtonsWrapper';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import Media from 'react-media';
import styles from './HeaderContent.module.css';

class HeaderContent extends Component {
  render() {
    return (
      <div className={styles.headerContentWrapper}>
        <Media query="(min-width: 1240px)" render={() => <NavigationBar />} />
        <Logo />
        <Media
          query="(min-width: 768px)"
          render={() => <AuthButtonsWrapper />}
        />
      </div>
    );
  }
}
export default HeaderContent;
