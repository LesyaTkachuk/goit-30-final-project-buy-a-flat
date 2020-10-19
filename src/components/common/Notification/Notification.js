import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import contactsSelectors from "../modules/contacts/contactsSelectors";
import contactsActions from "../modules/contacts/contactsActions";

import "react-toastify/dist/ReactToastify.css";

class Notification extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
    toggleError: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { error } = this.props;
    toast(`🦄 ${error}`);
    setTimeout(() => {
      this.props.toggleError();
    }, 5000);
  }

  render() {
    return (
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = {
  toggleError: contactsActions.toggleError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
