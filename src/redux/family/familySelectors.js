const getFamilyInfo = state => state.family.info;
const getFamilyBalance = state => state.family.info.balance;
const getTransactionCategories = state => state.family.transactionCategories;
const getTransaction = state => state.family.transaction;
const getTransactionAmount = state => state.family.transaction.amount;
const getFamiltGifts = state => state.family.gifts;
const getErrorMessage = state => state.family.error;
const getLoading = state => state.family.isLoading;
const getChartData = state => state.family.chart;
const getFamilyLoading = state => state.family.isLoading;
const getGiftsForUnpacking = state => state.family.gifts.giftsForUnpacking;
const getGiftsUnpacked = state => state.family.gifts.giftsUnpacked;
const getMonthsLeft = state => state.family.monthsLeft;
const getYearsLeft = state => state.family.yearsLeft;

export default {
  getFamilyInfo,
  getFamilyBalance,
  getTransactionCategories,
  getTransaction,
  getTransactionAmount,
  getErrorMessage,
  getLoading,
  getFamiltGifts,
  getChartData,
  getFamilyLoading,
  getGiftsForUnpacking,
  getGiftsUnpacked,
  getMonthsLeft,
  getYearsLeft,
};
