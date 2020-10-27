import React from 'react';
import { connect } from 'react-redux';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';
import Error from './common/Error';
import Modal from './common/Modal';
import { authSelectors } from '../redux/auth';
import { familySelectors } from '../redux/family';

const App = ({ familyError, authError }) => {
  return (
    <Layout>
      <Appbar />
      <Content />
      {(authError || familyError) && (
        <Modal>
          <Error />
        </Modal>
      )}
    </Layout>
  );
};

const mapStateToProps = state => ({
  authError: authSelectors.getErrorMessage(state),
  familyError: familySelectors.getErrorMessage(state),
});

export default connect(mapStateToProps)(App);
