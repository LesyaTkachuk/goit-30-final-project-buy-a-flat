import { createReducer, combineReducers } from '@reduxjs/toolkit';
import globalActions from './globalActions';

const initialState = {
  global: {
    currentDate: {
      currentMonth: 0,
      currentYear: 0,
    },
    chartDate: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
    isModalOpen: false,
    isCalculatorOpen: false,
    isLogoutOpen: false,
    isVerifyNotifOpen: false,
    isAuthFormOpen: false,
    hasGifts: false,
    showLogin: false,
    showNavPage: false,
    showExpensesPage: false,
  },
};

const isModalOpen = createReducer(initialState.global.isModalOpen, {
  [globalActions.toggleModal]: (state, { payload }) => !state,
});

const hasGifts = createReducer(initialState.global.hasGifts, {
  [globalActions.toggleHasGifts]: (state, { payload }) => !state,
});

const isLogoutOpen = createReducer(initialState.global.isLogoutOpen, {
  [globalActions.toggleLogout]: (state, { payload }) => !state,
});

const isVerifyNotifOpen = createReducer(initialState.global.isVerifyNotifOpen, {
  [globalActions.toggleVerifyNotif]: (state, { payload }) => !state,
});

const showLogin = createReducer(initialState.global.showLogin, {
  [globalActions.toggleShowLogin]: (state, { payload }) => {
    if (payload) {
      return payload === 'Войти' ? true : false;
    }

    return !state;
  },
});

const isAuthFormOpen = createReducer(initialState.global.isAuthFormOpen, {
  [globalActions.toggleAuthForm]: (state, { payload }) => !state,
});

const showNavPage = createReducer(initialState.global.showNavPage, {
  [globalActions.toggleShowNavPage]: state => !state,
});

const showExpensesPage = createReducer(initialState.global.showExpensesPage, {
  [globalActions.toggleShowExpensesPage]: state => !state,
});

const isCalculatorOpen = createReducer(initialState.global.isCalculatorOpen, {
  [globalActions.toggleCalculator]: state => !state,
});

const currentDate = createReducer(initialState.global.currentDate, {
  [globalActions.currentYear]: (state, { payload }) => ({
    ...state,
    currentYear: payload,
  }),
  [globalActions.currentMonth]: (state, { payload }) => ({
    ...state,
    currentMonth: payload,
  }),
});

const chartDate = createReducer(initialState.global.chartDate, {
  [globalActions.chartYear]: (state, { payload }) => ({
    ...state,
    year: payload,
  }),
  [globalActions.chartMonth]: (state, { payload }) => ({
    ...state,
    month: payload,
  }),
});

export default combineReducers({
  isModalOpen,
  isLogoutOpen,
  isAuthFormOpen,
  isVerifyNotifOpen,
  hasGifts,
  showLogin,
  showNavPage,
  showExpensesPage,
  isCalculatorOpen,
  currentDate,
  chartDate,
});
