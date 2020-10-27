import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import globalReducer from './global/globalReducer';
import familyReducer from './family/familyReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user.familyId'],
};

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    auth: authReducer,
    global: globalReducer,
    family: familyReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

const state = {
  auth: {
    user: {
      username: '',
      email: '',
      familyId: '',
    },
    token: '',
    isLoading: false,
    error: '',
  },

  family: {
    info: {
      balance: 0,
      flatPrice: 0,
      flatSquareMeters: 0,
      totalSalary: 0,
      passiveIncome: 0,
      incomePercentagetoSavings: 0,
    },

    gifts: {
      giftsUnpacked: 0,
      giftsForUnpacking: 0,
    },

    chartStatistics: {
      dataForChart: [],
    },

    financeStatistics: {
      savingsPercentage: 0,
      savingsValue: 0,
      savingsInSquareMeters: 0,
      totalSquareMeters: 0,
      monthsLeftToSaveForFlat: 0,
      savingsForNextSquareMeterLeft: 0,
      giftsForUnpacking: 0,
    },

    transactionCategories: [],

    transaction: {
      category: '',
      amount: 0,
      comment: '',
    },

    isLoading: false,
    error: '',
  },

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
    isRegistered: false,
    showNavPage: false,
    showExpensesPage: false,
  },

  // chartStatistics: {
  //   startMonth: '', //? расчитать
  //   startYear: '', //?
  //   dataForChart: [
  //     {
  //       month: 0,
  //       savings: 0,
  //       expenses: 0,
  //       expectedSavings: 0,
  //     },
  //   ],
  // },
};
