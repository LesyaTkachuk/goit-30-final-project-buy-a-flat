import { createAction } from '@reduxjs/toolkit';

const getFamilyRequest = createAction('family/getRequest');
const getFamilySuccess = createAction('family/getSuccess');
const getFamilyError = createAction('family/getError');

const addFamilyRequest = createAction('family/addRequest');
const addFamilySuccess = createAction('family/addSuccess');
const addFamilyError = createAction('family/addError');

const updateFamilyRequest = createAction('family/updateRequest');
const updateFamilySuccess = createAction('family/updateSuccess');
const updateFamilyError = createAction('family/updateError');

const getCurrentFamilyRequest = createAction('family/getCurrentRequest');
const getCurrentFamilySuccess = createAction('family/getCurrentSuccess');
const getCurrentFamilyError = createAction('family/getCurrentError');

const unsetError = createAction('family/unsetError');

export default {
  getFamilyRequest,
  getFamilySuccess,
  getFamilyError,
  addFamilyRequest,
  addFamilySuccess,
  addFamilyError,
  updateFamilyRequest,
  updateFamilySuccess,
  updateFamilyError,
  unsetError,
  getCurrentFamilyRequest,
  getCurrentFamilySuccess,
  getCurrentFamilyError,
};
