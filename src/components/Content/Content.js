import React from 'react';
import Home from '../../pages/Home';
import styles from './Content.module.scss';

function Content() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default Content;
