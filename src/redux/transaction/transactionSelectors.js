import { createSelector } from '@reduxjs/toolkit';

const getTransactionCategories = state =>
  state.transactions.transactionCategories;

export default {
  getTransactionCategories,
};
