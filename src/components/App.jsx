import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';
import Error from './common/Error';
import Modal from './common/Modal';
import { authSelectors } from '../redux/auth';
import { familySelectors } from '../redux/family';
import Spinner from './common/Spinner';

class App extends Component {
  render() {
    const {
      familyError,
      authError,
      isFamilyLoading,
      isAuthLoading,
    } = this.props;

    return (
      <Layout>
        <Appbar />
        {(isFamilyLoading || isAuthLoading) && <Spinner />}
        <Content />
        {(authError || familyError) && (
          <Modal>
            <Error />
          </Modal>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
  isFamilyLoading: familySelectors.getFamilyLoading(state),
  isAuthLoading: authSelectors.getAuthLoading(state),
});

export default connect(mapStateToProps)(App);
