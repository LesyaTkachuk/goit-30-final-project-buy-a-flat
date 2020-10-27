import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('global/toggleModal');

const toggleShowLogin = createAction('global/toggleShowLogin');

const toggleShowNavPage = createAction('global/toggleShowNavPage');

const toggleShowExpensesPage = createAction('global/toggleShowExpensesPage');

export default {
  toggleModal,
  toggleShowLogin,
  toggleShowNavPage,
  toggleShowExpensesPage,
};
