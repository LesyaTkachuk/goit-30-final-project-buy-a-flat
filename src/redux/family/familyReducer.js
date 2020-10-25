import { createReducer, combineReducers } from '@reduxjs/toolkit';
import familyActions from './familyActions';
import authActions from '../auth/authActions';
import { authOperations } from '../auth';

const initialState = {
  family: {
    info: {
      id: '', //?
      balance: 0,
      flatPrice: 0,
      flatSquareMeters: 0,
      plans: [],
      // plans: {
      //   totalSalary: 0,
      //   passiveIncome: 0,
      //   incomePercentagetoSavings: 0,
      //   settledAt: '',
      // },
    },
    gifts: {
      giftsUnpacked: 0,
      giftsForUnpacking: 0,
    },
    isLoading: false,
    error: '',
  },
};

const setFamily = (state, { payload }) => ({ ...state, ...payload });
const setError = (_, { payload }) => payload;
const unsetError = () => null;

const info = createReducer(initialState.family.info, {
  [familyActions.addFamilySuccess]: setFamily,
  [familyActions.updateFamilySuccess]: setFamily,
  [familyActions.getCurrentFamilySuccess]: setFamily,
  [authActions.logoutSuccess]: () => initialState.family.info,
});

const gifts = createReducer(initialState.family.gifts, {
  [familyActions.updateGiftsSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [authActions.logoutSuccess]: () => initialState.family.gifts,
});

const loading = createReducer(initialState.family.isLoading, {
  [familyActions.addFamilyRequest]: () => true,
  [familyActions.addFamilySuccess]: () => false,
  [familyActions.addFamilyError]: () => false,

  [familyActions.updateFamilyRequest]: () => true,
  [familyActions.updateFamilySuccess]: () => false,
  [familyActions.updateFamilyError]: () => false,

  [familyActions.getCurrentFamilyRequest]: () => true,
  [familyActions.getCurrentFamilySuccess]: () => false,
  [familyActions.getCurrentFamilyError]: () => false,

  [familyActions.updateGiftsRequest]: () => true,
  [familyActions.updateGiftsSuccess]: () => false,
  [familyActions.updateGiftsError]: () => false,
});

const error = createReducer(initialState.family.error, {
  [familyActions.addFamilyError]: setError,
  [familyActions.updateFamilyError]: setError,
  [familyActions.getCurrentFamilyError]: setError,
  [familyActions.updateGiftsError]: setError,
  [familyActions.unsetError]: unsetError,
});

export default combineReducers({
  info,
  loading,
  error,
  gifts,
});
