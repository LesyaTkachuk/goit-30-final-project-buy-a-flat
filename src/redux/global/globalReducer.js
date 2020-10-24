import { createReducer, combineReducers } from '@reduxjs/toolkit';
import globalActions from './globalActions';

const initialState = {
  isModalOpen: false,
  isRegistered: true,
};

const isModalOpen = createReducer(initialState.isModalOpen, {
  [globalActions.toggleModal]: (state, { payload }) => !state,
});

const isRegistered = createReducer(initialState.isRegistered, {
  [globalActions.toggleIsRegistered]: (state, { payload }) => payload,
});



export default combineReducers({
  isModalOpen,
  isRegistered,
});
