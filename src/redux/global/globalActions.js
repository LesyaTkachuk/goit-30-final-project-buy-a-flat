import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('global/toggleModal');

const toggleIsRegistered = createAction('global/toggleIsRegistered');

const toggleShowNavPage = createAction('global/toggleShowNavPage');

const toggleShowExpensesPage = createAction('global/toggleShowExpensesPage');

export default {
  toggleModal,
  toggleIsRegistered,
  toggleShowNavPage,
  toggleShowExpensesPage,
};
