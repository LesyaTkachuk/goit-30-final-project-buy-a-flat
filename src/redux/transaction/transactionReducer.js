import { createReducer, combineReducers } from '@reduxjs/toolkit';
import transactionActions from './transactionActions';

const initialState = {
  transactionsCategories: [],
  expenses: 0,
  loading: false,
  error: null,
};

const setError = (_, { payload }) => payload;
const unsetError = () => null;

const transactionsCategories = createReducer(
  initialState.transactionsCategories,
  {
    [transactionActions.getCategoriesSuccess]: (_, { payload }) => payload,
  },
);

const loading = createReducer(initialState.loading, {
  [transactionActions.getCategoriesRequest]: () => true,
  [transactionActions.getCategoriesSuccess]: () => false,
  [transactionActions.getCategoriesError]: () => false,
});

const error = createReducer(initialState.error, {
  [transactionActions.getCategoriesError]: setError,
  [transactionActions.unsetError]: unsetError,
});

export default combineReducers({
  transactionsCategories,
  loading,
  error,
});
