const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getFamilyId = state => state.auth.user.familyId;

const getLoader = state => state.auth.loading;

const getError = state => state.auth.error;

export default {
  isAuthenticated,
  getUserName,
  getLoader,
  getError,
  getUserEmail,
  getFamilyId,
};
