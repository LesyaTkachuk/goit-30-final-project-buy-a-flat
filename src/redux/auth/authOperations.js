import axios from 'axios';
import { globalActions } from '../global';
import authActions from './authActions';

axios.defaults.baseURL = 'https://';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => (dispatch, getState) => {
  const {
    global: { isModalOpen },
  } = getState();

  dispatch(authActions.registerRequest());
  isModalOpen && dispatch(globalActions.toggleModal());

  axios
    .post('/api/users/sign-up', credentials)
    .then(({ data }) => {
      dispatch(authActions.registerSuccess(data));
    })
    .catch(({ message, status }) =>
      dispatch(authActions.registerError({ message, status })),
    );
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/api/users/sign-in', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(({ message, status }) =>
      dispatch(authActions.loginError({ message, status })),
    );
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/api/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(({ message, status }) => {
      dispatch(authActions.getCurrentUserError({ message, status }));
      // dispatch(authActions.clearToken());
    });
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/api/users/sign-out')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(({ message, status }) =>
      dispatch(authActions.logoutError({ message, status })),
    );
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};