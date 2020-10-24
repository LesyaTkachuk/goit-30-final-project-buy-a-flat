import { createSelector } from '@reduxjs/toolkit';

const getTransactionsCategories = state =>
  state.transactions.transactionsCategories;

export default {
  getTransactionsCategories,
};
