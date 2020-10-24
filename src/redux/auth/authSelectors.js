const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getLoader = state => state.auth.loading;

const getError = state => state.auth.error;

export default {
  isAuthenticated,
  getUserName,
  getLoader,
  getError,
};
