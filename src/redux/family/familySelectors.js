const getFamilyInfo = state => state.family.info;
const getFamilyBalance = state => state.family.info.balance;
const getTransactionCategories = state => state.family.transactionCategories;
const getTransaction = state => state.family.transaction;
const getFamiltGifts = state => state.family.gifts;
const getErrorMessage = state => state.family.error.message;
const getErrorStatus = state => state.family.error.status;
const getLoading = state => state.family.isLoading;
const getChartData = state => state.family.chart;

export default {
  getFamilyInfo,
  getFamilyBalance,
  getTransactionCategories,
  getTransaction,
  getErrorMessage,
  getErrorStatus,
  getLoading,
  getFamiltGifts,
  getChartData,
};
