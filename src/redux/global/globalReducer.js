import { createReducer, combineReducers } from '@reduxjs/toolkit';
import globalActions from './globalActions';

const initialState = {
  global: {
    currentDate: {
      currentMonth: 0, // расчитать при логин и записать в чарт
      currentYear: 0, // расчитать при логин и записать в чарт
    },
    chartDate: {
      chartMonth: 0,
      chartYear: 0,
    },
    transactionCategories: [], // при логине
    isModalOpen: false,
    showLogin: true,
    showNavPage: false,
    showExpensesPage: false,
  },
};

const transactionCategories = createReducer(
  initialState.global.transactionCategories,
  {
    [globalActions.getCategoriesSuccess]: (_, { payload }) => payload,
  },
);

const isModalOpen = createReducer(initialState.global.isModalOpen, {
  [globalActions.toggleModal]: (state, { payload }) => !state,
});

const showLogin = createReducer(initialState.global.showLogin, {
  [globalActions.toggleShowLogin]: (state, { payload }) => {
    console.log(payload);
    if (payload) {
      return payload === 'Войти' ? true : false;
    }

    return !state;
  },
});

const showNavPage = createReducer(initialState.global.showNavPage, {
  [globalActions.toggleShowNavPage]: state => !state,
});

const showExpensesPage = createReducer(initialState.global.showNavPage, {
  [globalActions.toggleShowExpensesPage]: state => !state,
});

export default combineReducers({
  transactionCategories,
  isModalOpen,
  showLogin,
  showNavPage,
  showExpensesPage,
});
