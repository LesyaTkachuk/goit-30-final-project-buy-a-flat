import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar';
import barGraphIcon from '../../assets/icons/bar-graph.svg';
import styles from './Navigation.module.css';

class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigationWrapper}>
        <NavigationBar />
        <img src={barGraphIcon} alt="graph-icon" />
      </div>
    );
  }
}

export default Navigation;
