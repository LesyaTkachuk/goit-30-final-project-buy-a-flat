import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import PrivateRoute from '../PrivateRoute.jsx';
import PublicRoute from '../PublicRoute.jsx';
import routes from '../../routes';
import Spinner from '../common/Spinner';
import styles from './Content.module.css';

function Content({ isAuthenticated }) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <PublicRoute key={route.path} {...route} />
            ),
          )}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Content);
