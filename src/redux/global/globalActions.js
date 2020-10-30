import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('global/toggleModal');

const toggleShowLogin = createAction('global/toggleShowLogin');

const toggleAuthForm = createAction('global/toggleAuthForm');

const toggleHasGifts = createAction('global/toggleHasGifts');

const toggleLogout = createAction('global/toggleLogout');

const toggleVerifyNotif = createAction('global/toggleVerifyNotif');

const toggleShowNavPage = createAction('global/toggleShowNavPage');

const toggleShowExpensesPage = createAction('global/toggleShowExpensesPage');

const toggleCalculator = createAction('global/toggleCalculator');

export default {
  toggleModal,
  toggleShowLogin,
  toggleHasGifts,
  toggleLogout,
  toggleVerifyNotif,
  toggleShowNavPage,
  toggleAuthForm,
  toggleShowExpensesPage,
  toggleCalculator,
};
