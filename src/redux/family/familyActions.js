import { createAction } from '@reduxjs/toolkit';

const addFamilyRequest = createAction('family/addRequest');
const addFamilySuccess = createAction('family/addSuccess');
const addFamilyError = createAction('family/addError');

const updateOrSetFamily = createAction('family/updateSetSuccess');

const updateFamilyRequest = createAction('family/updateRequest');
const updateFamilySuccess = createAction('family/updateSuccess');
const updateFamilyError = createAction('family/updateError');

const getCurrentFamilyRequest = createAction('family/getCurrentRequest');
const getCurrentFamilySuccess = createAction('family/getCurrentSuccess');
const getCurrentFamilyError = createAction('family/getCurrentError');

const getCategoriesRequest = createAction('transactions/getCategoriesRequest');
const getCategoriesSuccess = createAction('transactions/getCategoriesSuccess');
const getCategoriesError = createAction('transactions/getCategoriesError');

const createTransactionRequest = createAction('transactions/createRequest');
const createTransactionSuccess = createAction('transactions/createSuccess');
const createTransactionError = createAction('transactions/createError');

const setTransaction = createAction(
  'family/transactions/setTransactionSuccess',
);

const setTransactionAmount = createAction(
  'family/transactions/setAmountSuccess',
);

const getChartDataRequest = createAction('family/getChartDataRequest');
const getChartDataSuccess = createAction('family/getChartDataSuccess');
const getChartDataError = createAction('family/getChartDataError');

const getFinanceDataRequest = createAction('family/getFinanceDataRequest');
const getFinanceDataSuccess = createAction('family/getFinanceDataSuccess');
const getFinanceDataError = createAction('family/getFinanceDataError');

const updateGiftsRequest = createAction('family/updateGiftsRequest');
const updateGiftsSuccess = createAction('family/updateGiftsSuccess');
const updateGiftsError = createAction('family/updateGiftsError');

const countMonthsLeft = createAction('family/countMonthsLeft');

const countYearsLeft = createAction('family/countYearsLeft');

const unsetError = createAction('family/unsetError');

export default {
  addFamilyRequest,
  addFamilySuccess,
  addFamilyError,
  updateOrSetFamily,
  updateFamilyRequest,
  updateFamilySuccess,
  updateFamilyError,
  getCurrentFamilyRequest,
  getCurrentFamilySuccess,
  getCurrentFamilyError,
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  createTransactionRequest,
  createTransactionSuccess,
  createTransactionError,
  setTransaction,
  setTransactionAmount,
  getChartDataRequest,
  getChartDataSuccess,
  getChartDataError,
  getFinanceDataRequest,
  getFinanceDataSuccess,
  getFinanceDataError,
  updateGiftsRequest,
  updateGiftsSuccess,
  updateGiftsError,
  unsetError,
  countMonthsLeft,
  countYearsLeft,
};
