import { createAction } from '@reduxjs/toolkit';

const addFamilyRequest = createAction('family/addRequest');
const addFamilySuccess = createAction('family/addSuccess');
const addFamilyError = createAction('family/addError');

const updateFamilyRequest = createAction('family/updateRequest');
const updateFamilySuccess = createAction('family/updateSuccess');
const updateFamilyError = createAction('family/updateError');

const getCurrentFamilyRequest = createAction('family/getCurrentRequest');
const getCurrentFamilySuccess = createAction('family/getCurrentSuccess');
const getCurrentFamilyError = createAction('family/getCurrentError');

const updateGiftsRequest = createAction('family/updateGiftsRequest');
const updateGiftsSuccess = createAction('family/updateGiftsSuccess');
const updateGiftsError = createAction('family/updateGiftsError');

const unsetError = createAction('family/unsetError');

export default {
  addFamilyRequest,
  addFamilySuccess,
  addFamilyError,
  updateFamilyRequest,
  updateFamilySuccess,
  updateFamilyError,
  getCurrentFamilyRequest,
  getCurrentFamilySuccess,
  getCurrentFamilyError,
  updateGiftsRequest,
  updateGiftsSuccess,
  updateGiftsError,
  unsetError,
};
