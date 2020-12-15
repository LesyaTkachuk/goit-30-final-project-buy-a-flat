import TestButton from './TestButton';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';

const mapDispatchToProps = {
  loginTestAccount: authOperations.login,
};

export default connect(null, mapDispatchToProps)(TestButton);
