import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    user: {
      name: '',
      email: '',
    },
    token: null,
    loading: false,
    error: '',
  },
};

const reducer = createReducer(initialState, {});

export default reducer;
