import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialState = {
  auth: {
    user: {
      id: '', //?
      name: '',
      email: '',
      familyId: '',
    },
    token: '5464',
    isLoading: false,
    error: '',
  },
};

const setUser = (state, { payload }) => ({ ...state, ...payload.user });
const setCurrentUser = (_, { payload }) => payload;
const setToken = (_, { payload }) => payload.token;
const setError = (_, { payload }) => payload;
const unsetError = () => null;

const user = createReducer(initialState.auth.user, {
  [authActions.registerSuccess]: setUser,
  [authActions.loginSuccess]: setUser,
  [authActions.getCurrentUserSuccess]: setCurrentUser,
  [authActions.logoutSuccess]: () => initialState.auth.user,
});

const token = createReducer(initialState.auth.token, {
  [authActions.loginSuccess]: setToken,
  [authActions.logoutSuccess]: () => null,
  [authActions.clearToken]: () => null,
});

const loading = createReducer(initialState.auth.isLoading, {
  [authActions.registerRequest]: () => true,
  [authActions.loginRequest]: () => true,
  [authActions.logoutRequest]: () => true,
  [authActions.getCurrentUserRequest]: () => true,

  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.logoutSuccess]: () => false,

  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutError]: () => false,
});

const error = createReducer(initialState.auth.error, {
  [authActions.loginRequest]: unsetError,
  [authActions.logoutRequest]: unsetError,
  [authActions.registerRequest]: unsetError,
  [authActions.getCurrentUserRequest]: unsetError,
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.getCurrentUserError]: setError,
  [authActions.logoutError]: setError,
  [authActions.unsetError]: unsetError,
});

export default combineReducers({
  user,
  token,
  error,
  loading,
});
