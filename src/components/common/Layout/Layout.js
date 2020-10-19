import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

function Layout({ children }) {
  return <div className={styles.container}> {children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
