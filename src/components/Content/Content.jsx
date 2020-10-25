import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../routes';
import Spinner from '../common/Spinner';
import styles from './Content.module.css';
import Error from '../Error/Error';

function Content() {
  return (
    <div className={styles.container}>
      <Error />
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
