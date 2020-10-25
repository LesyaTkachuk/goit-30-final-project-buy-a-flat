import { createReducer, combineReducers } from '@reduxjs/toolkit';
import transactionActions from './transactionActions';

const initialState = {
  transaction: {
    transactionCategories: [],
    item: {
      category: '',
      amount: 0,
      comment: '',
    },
    loading: false,
    error: null,
  },
};

const setError = (_, { payload }) => payload;
const unsetError = () => null;

const transactionCategories = createReducer(
  initialState.transaction.transactionCategories,
  {
    [transactionActions.getCategoriesSuccess]: (_, { payload }) => payload,
  },
);

const item = createReducer(initialState.transaction.item, {});

const loading = createReducer(initialState.transaction.loading, {
  [transactionActions.getCategoriesRequest]: () => true,
  [transactionActions.getCategoriesSuccess]: () => false,
  [transactionActions.getCategoriesError]: () => false,
});

const error = createReducer(initialState.transaction.error, {
  [transactionActions.getCategoriesError]: setError,
  [transactionActions.unsetError]: unsetError,
});

export default combineReducers({
  transactionCategories,
  item,
  loading,
  error,
});
