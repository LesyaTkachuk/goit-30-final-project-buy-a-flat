import { createReducer, combineReducers } from '@reduxjs/toolkit';
import familyActions from './familyActions';
import authActions from '../auth/authActions';

const initialState = {
  family: {
    info: {
      balance: 0,
      flatPrice: 0,
      flatSquareMeters: 0,
      totalSalary: 0,
      passiveIncome: 0,
      incomePercentageToSavings: 0,
    },

    transactionCategories: [],

    transaction: {
      category: '',
      amount: 0,
      comment: '',
    },

    chartStatistics: {
      dataForChart: [],
    },

    financeStatistics: {
      savingsPercentage: 0,
      savingsValue: 0,
      savingsInSquareMeters: 0,
      totalSquareMeters: 0,
      monthsLeftToSaveForFlat: 0,
      savingsForNextSquareMeterLeft: 0,
      giftsForUnpacking: 0,
    },

    gifts: {
      giftsUnpacked: 0,
      giftsForUnpacking: 0,
    },

    isLoading: false,
    error: '',
  },
};

const setFamily = (state, { payload }) => ({ ...state, ...payload.info });
const setError = (_, { payload }) => payload;
const unsetError = () => initialState.family.error;

const info = createReducer(initialState.family.info, {
  [familyActions.updateOrSetFamily]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [familyActions.addFamilySuccess]: setFamily,
  [familyActions.updateFamilySuccess]: setFamily,
  [familyActions.getCurrentFamilySuccess]: setFamily,
  [authActions.logoutSuccess]: () => initialState.family.info,
});

const transactionCategories = createReducer(
  initialState.family.transactionCategories,
  {
    [familyActions.getCategoriesSuccess]: (_, { payload }) => payload,
    [authActions.logoutSuccess]: () =>
      initialState.family.transactionCategories,
  },
);

const transaction = createReducer(initialState.family.transaction, {
  [familyActions.createTransactionSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialState.family.transaction,
});

const chart = createReducer(initialState.family.chartStatistics.dataForChart, {
  [familyActions.getChartDataSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () =>
    initialState.family.chartStatistics.dataForChart,
});

const finance = createReducer(initialState.family.financeStatistics, {
  [familyActions.getFinanceDataSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => initialState.family.financeStatistics,
});

const gifts = createReducer(initialState.family.gifts, {
  [familyActions.updateGiftsSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [authActions.logoutSuccess]: () => initialState.family.gifts,
});

const isLoading = createReducer(initialState.family.isLoading, {
  [familyActions.addFamilyRequest]: () => true,
  [familyActions.addFamilySuccess]: () => false,
  [familyActions.addFamilyError]: () => false,

  [familyActions.updateFamilyRequest]: () => true,
  [familyActions.updateFamilySuccess]: () => false,
  [familyActions.updateFamilyError]: () => false,

  [familyActions.getCurrentFamilyRequest]: () => true,
  [familyActions.getCurrentFamilySuccess]: () => false,
  [familyActions.getCurrentFamilyError]: () => false,

  [familyActions.createTransactionRequest]: () => true,
  [familyActions.createTransactionSuccess]: () => false,
  [familyActions.createTransactionError]: () => false,

  [familyActions.getChartDataRequest]: () => true,
  [familyActions.getChartDataSuccess]: () => false,
  [familyActions.getChartDataError]: () => false,

  [familyActions.getFinanceDataRequest]: () => true,
  [familyActions.getFinanceDataSuccess]: () => false,
  [familyActions.getFinanceDataError]: () => false,

  [familyActions.updateGiftsRequest]: () => true,
  [familyActions.updateGiftsSuccess]: () => false,
  [familyActions.updateGiftsError]: () => false,
});

const error = createReducer(initialState.family.error, {
  [familyActions.addFamilyError]: setError,
  [familyActions.updateFamilyError]: setError,
  [familyActions.getCurrentFamilyError]: setError,
  [familyActions.createTransactionError]: setError,
  [familyActions.updateGiftsError]: setError,
  [familyActions.getChartDataError]: setError,
  [familyActions.getFinanceDataError]: setError,
  [familyActions.unsetError]: unsetError,
});

export default combineReducers({
  info,
  transactionCategories,
  transaction,
  chart,
  finance,
  gifts,
  isLoading,
  error,
});
