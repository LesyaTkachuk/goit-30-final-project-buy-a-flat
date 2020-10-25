import { createAction } from '@reduxjs/toolkit';

const getCategoriesRequest = createAction('transactions/getCategoriesRequest');
const getCategoriesSuccess = createAction('transactions/getCategoriesSuccess');
const getCategoriesError = createAction('transactions/getCategoriesError');

const createItemRequest = createAction('transactions/createItemRequest');
const createItemSuccess = createAction('transactions/createItemSuccess');
const createItemError = createAction('transactions/createItemError');

const unsetError = createAction('transactions/unsetError');

export default {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  createItemRequest,
  createItemSuccess,
  createItemError,
  unsetError,
};
