const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.username;

const getUserEmail = state => state.auth.user.email;

const getFamilyId = state => state.auth.user.familyId;

const getLoader = state => state.auth.loading;

const getErrorMessage = state => state.auth.error.message;

const getErrorStatus = state => state.auth.error.status;

export default {
  isAuthenticated,
  getUserName,
  getLoader,
  getErrorMessage,
  getErrorStatus,
  getUserEmail,
  getFamilyId,
};
