import { createReducer, combineReducers } from '@reduxjs/toolkit';
import familyActions from './familyActions';
import authActions from '../auth/authActions';

const initialState = {
  family: {
    info: {
      income: 0,
      flatCost: 0,
      flatMeters: 0,
      accumulations: 0,
      planning: 0,
    },
    isLoading: false,
    error: '',
  },
};

const setFamily = (state, { payload }) => ({ ...state, ...payload });
const setError = (_, { payload }) => payload;
const unsetError = () => null;

const info = createReducer(initialState.family.info, {
  [familyActions.getFamilySuccess]: setFamily,
  [familyActions.addFamilySuccess]: setFamily,
  [familyActions.updateFamilySuccess]: setFamily,
  [familyActions.getCurrentFamilySuccess]: setFamily,
  [authActions.logoutSuccess]: () => initialState.family.info,
});

const loading = createReducer(initialState.family.isLoading, {
  [familyActions.getFamilyRequest]: () => true,
  [familyActions.getFamilySuccess]: () => false,
  [familyActions.getFamilyError]: () => false,

  [familyActions.addFamilyRequest]: () => true,
  [familyActions.addFamilySuccess]: () => false,
  [familyActions.addFamilyError]: () => false,

  [familyActions.updateFamilyRequest]: () => true,
  [familyActions.updateFamilySuccess]: () => false,
  [familyActions.updateFamilyError]: () => false,

  [familyActions.getCurrentFamilyRequest]: () => true,
  [familyActions.getCurrentFamilySuccess]: () => false,
  [familyActions.getCurrentFamilyError]: () => false,
});

const error = createReducer(initialState.family.error, {
  [familyActions.getFamilyError]: setError,
  [familyActions.addFamilyError]: setError,
  [familyActions.updateFamilyError]: setError,
  [familyActions.getCurrentFamilyError]: setError,
  [familyActions.unsetError]: unsetError,
});

export default combineReducers({
  info,
  loading,
  error,
});
