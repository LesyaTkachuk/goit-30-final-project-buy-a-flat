<<<<<<< HEAD
import React from 'react';
=======
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../routes';
import Spinner from '../common/Spinner';
>>>>>>> dev
import styles from './Content.module.css';

function Content() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(route => (
            <Route key={route.name} {...route} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default Content;
