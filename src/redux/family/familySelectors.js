const getFamilyInfo = state => state.family.info;
const getFamilyBalance = state => state.family.info.balance;
const getTransaction = state => state.family.transaction;
const getFamiltGifts = state => state.family.gifts;
const getError = state => state.family.error;
const getLoading = state => state.family.isLoading;

export default {
  getFamilyInfo,
  getFamilyBalance,
  getTransaction,
  getError,
  getLoading,
  getFamiltGifts,
};
