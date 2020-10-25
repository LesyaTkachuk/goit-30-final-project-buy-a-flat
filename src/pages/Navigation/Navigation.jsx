import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../../components/NavigationBar';
import barGraphIcon from '../../assets/icons/bar-graph.svg';
import styles from './Navigation.module.css';
import { globalActions } from '../../redux/global';

class Navigation extends Component {
  componentDidMount() {
    this.props.showNavPage();
  }

  componentWillUnmount() {
    this.props.showNavPage();
  }

  render() {
    return (
      <div className={styles.navigationWrapper}>
        <NavigationBar />
        <img src={barGraphIcon} alt="graph-icon" />
      </div>
    );
  }
}

const mapDispatchToProps = {
  showNavPage: globalActions.toggleShowNavPage,
};

export default connect(null, mapDispatchToProps)(Navigation);
