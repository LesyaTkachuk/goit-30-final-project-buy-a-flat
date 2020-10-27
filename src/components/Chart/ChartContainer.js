import { connect } from 'react-redux';
import { familySelectors, familyOperations } from '../../redux/family';
import { authSelectors } from '../../redux/auth';
import Chart from './Chart';

const mapStateToProps = state => ({
  familyId: familySelectors.getChartData(state),
  data: authSelectors.getFamilyId(state),
});

const mapDispatchToProps = {
  getChartData: familyOperations.getChartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
