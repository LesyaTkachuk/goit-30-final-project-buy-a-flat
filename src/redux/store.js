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
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
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
      name: '',
      email: '',
    },
    token: null,
    loading: false,
    error: '',
  },
  family: {
    info: {
      income: 0,
      flatCost: 0,
      flatMeters: 0,
      accumulations: 0,
      planning: 0,
    },
    isLoading: false,
    error: '',
  },
  statistics: {
    monthForStatistics: '',
  },
  transactions: {
    transactionsCategories: [],
    expenses: 0,
  },
  global: {
    isModalOpen: false,
    isRegistered: false,
    showExpensesPage: false,
  },
};
