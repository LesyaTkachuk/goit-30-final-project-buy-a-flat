import { createReducer, combineReducers } from '@reduxjs/toolkit';
import globalActions from './globalActions';

const initialState = {
  global: {
    isModalOpen: false,
    isRegistered: true,
    showNavPage: false,
    showExpensesPage: false,
  },
};

const isModalOpen = createReducer(initialState.global.isModalOpen, {
  [globalActions.toggleModal]: (state, { payload }) => !state,
});

const isRegistered = createReducer(initialState.global.isRegistered, {
  [globalActions.toggleIsRegistered]: (state, { payload }) => payload,
});

const showNavPage = createReducer(initialState.global.showNavPage, {
  [globalActions.toggleShowNavPage]: state => !state,
});

const showExpensesPage = createReducer(initialState.global.showNavPage, {
  [globalActions.toggleShowExpensesPage]: state => !state,
});

export default combineReducers({
  isModalOpen,
  isRegistered,
  showNavPage,
  showExpensesPage,
});
