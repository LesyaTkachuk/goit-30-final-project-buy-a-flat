import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

class SpinnerOverlay extends Component {
  render() {
    return <LoadingOverlay spinner={<BounceLoader />}></LoadingOverlay>;
  }
}

export default SpinnerOverlay;
