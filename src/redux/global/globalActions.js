import { createAction } from '@reduxjs/toolkit';

const getCategoriesRequest = createAction('transactions/getCategoriesRequest');
const getCategoriesSuccess = createAction('transactions/getCategoriesSuccess');
const getCategoriesError = createAction('transactions/getCategoriesError');

const toggleModal = createAction('global/toggleModal');

const toggleShowLogin = createAction('global/toggleShowLogin');

const toggleShowNavPage = createAction('global/toggleShowNavPage');

const toggleShowExpensesPage = createAction('global/toggleShowExpensesPage');

export default {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  toggleModal,
  toggleShowLogin,
  toggleShowNavPage,
  toggleShowExpensesPage,
};
