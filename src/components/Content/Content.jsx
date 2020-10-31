import React, { Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute.jsx';
import PublicRoute from '../PublicRoute.jsx';
import routes from '../../routes';
import Spinner from '../common/Spinner';
import Modal from '../common/Modal';
import styles from './Content.module.css';
import { authOperations } from '../../redux/auth/index.js';

class Content extends Component {
  componentDidMount() {
    // this.props.getCurrentUser();
  }

  render() {
    return (
      <div className={styles.container}>
        <Suspense
          fallback={
            <Modal>
              <Spinner />
            </Modal>
          }
        >
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
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser(),
};

export default connect(null, mapDispatchToProps)(Content);
