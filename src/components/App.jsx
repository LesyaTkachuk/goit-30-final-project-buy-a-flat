import React from 'react';
import { connect } from 'react-redux';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';
import Notification from './common/Notification';

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
  error: state.auth.error,
});

export default connect(mapStateToProps)(App);
