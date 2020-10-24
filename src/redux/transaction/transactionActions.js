import { createAction } from '@reduxjs/toolkit';

const getCategoriesRequest = createAction('transactions/getCategoriesRequest');
const getCategoriesSuccess = createAction('transactions/getCategoriesSuccess');
const getCategoriesError = createAction('transactions/getCategoriesError');

const unsetError = createAction('transactions/unsetError');

export default {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  unsetError,
};
