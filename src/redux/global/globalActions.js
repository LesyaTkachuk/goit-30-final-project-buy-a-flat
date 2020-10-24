import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('global/toggleModal');

const toggleIsRegistered = createAction('global/toggleIsRegistered');

export default {
  toggleModal,
  toggleIsRegistered,
};
