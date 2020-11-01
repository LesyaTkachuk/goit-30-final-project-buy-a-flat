import { connect } from 'react-redux';
import {
  familyActions,
  familyOperations,
  familySelectors,
} from '../../redux/family';
import { globalActions, globalSelectors } from '../../redux/global';
import ExpensesForm from './ExpenseForm';

const mapStateToProps = state => ({
  familyBalance: familySelectors.getFamilyBalance(state),
  transaction: familySelectors.getTransaction(state),
  transactionCategories: familySelectors.getTransactionCategories(state),
  transactionAmount: familySelectors.getTransactionAmount(state),
  isCalculatorOpen: globalSelectors.getIsCalculatorOpen(state),
  isExpenseBtnActive: globalSelectors.getIsExpenseBtnActive(state),
});

const mapDispatchToProps = {
  getCategories: familyOperations.getTransactions,
  setTransaction: familyActions.setTransaction,
  setCalculatorOpen: globalActions.toggleCalculator,
  setExpenseBtnActive: globalActions.toggleExpenseBtnActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
