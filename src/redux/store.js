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
import transactionReducer from './transaction/transactionReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    global: globalReducer,
    family: familyReducer,
    transaction: transactionReducer,
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
      id: '',
      username: '',
      email: '',
      familyId: '',
    },
    token: null,
    isLoading: false,
    error: '',
  },

  family: {
    info: {
      id: '', //?
      balance: 0,
      flatPrice: 0,
      flatSquareMeters: 0,
      plans: {
        totalSalary: 0,
        passiveIncome: 0,
        incomePercentagetoSavings: 0,
        settledAt: '',
      },
    },
    gifts: {
      giftsUnpacked: 0,
      giftsForUnpacking: 0,
    },
    isLoading: false,
    error: '',
  },

  transaction: {
    transactionCategories: [],
    category: '',
    amount: 0,
    comment: '',
  },

  global: {
    isModalOpen: false,
    isRegistered: false,
    showExpensesPage: false,
  },

  statistics: {
    startMonth: '', // расчитать
    startYear: '', //?
    dataForChart: [
      {
        month: 0,
        savings: 0,
        expenses: 0,
        expectedSavings: 0,
      },
    ],
  },

  flatStatistics: {
    flats: [
      {
        savingsPercentage: 0,
        savingsValue: 0,
        savingsInSquareMeters: 0,
        totalSquareMeters: 0,
        monthsLeftToSaveForFlat: 0,
        savingsForNextSquareMeterLeft: 0,
        giftsForUnpacking: 0,
      },
    ],
  },
};
