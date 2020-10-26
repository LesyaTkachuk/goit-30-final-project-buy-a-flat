import React from 'react';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

function WithAuth(WrappedComponent) {
  function withAuth(props) {
    return <WrappedComponent {...props} />;
  }
  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });

  return connect(mapStateToProps)(withAuth);
}
export default WithAuth;
