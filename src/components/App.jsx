import React from 'react';
import { connect } from 'react-redux';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';
import Notification from './common/Notification';
import { authSelectors } from '../redux/auth';

const App = ({ error }) => {
  return (
    <Layout>
      <Appbar />
      <Content />
      {error && <Notification />}
    </Layout>
  );
};

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});

export default connect(mapStateToProps)(App);
