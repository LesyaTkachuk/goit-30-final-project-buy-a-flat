import Home from "./Home";
import { connect } from 'react-redux';
import { globalSelectors } from '../../redux/global';


const mapStateToProps = state => ({
    showLoginForm: globalSelectors.getShowLoginForm(state),
  });
  
  export default connect(mapStateToProps)(Home);