import { connect } from 'react-redux';
import { familySelectors, familyOperations } from '../../redux/family';
import Chart from './Chart';

const mapStateToProps = state => ({
  data: familySelectors.getChartData(state),
});

const mapDispatchToProps = {
  getChartData: familyOperations.getChartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
