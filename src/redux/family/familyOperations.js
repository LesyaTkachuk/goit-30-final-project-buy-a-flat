import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const addFamily = credentials => dispatch => {
  dispatch(familyActions.addFamilyRequest());

  axios
    .post('/api/families', credentials)
    .then(({ data }) => dispatch(familyActions.addFamilySuccess(data)))
    .catch(({ message }) => dispatch(familyActions.addFamilyError(message)));
};

const updateFamily = credentials => dispatch => {
  dispatch(familyActions.updateFamilyRequest());

  axios
    .put(`/api/families`, credentials)
    .then(({ data }) => dispatch(familyActions.updateFamilySuccess(data)))
    .catch(({ message }) => dispatch(familyActions.updateFamilyError(message)));
};

const getCurrentFamily = () => (dispatch, getState) => {
  // const {
  //   auth: { token: persistedToken },
  // } = getState();

  // if (!persistedToken) {
  //   return;
  // }

  dispatch(familyActions.getCurrentFamilyRequest());

  axios
    .get(`/api/families/current`)
    .then(({ data }) => dispatch(familyActions.getCurrentFamilySuccess(data)))
    .catch(({ message }) =>
      dispatch(familyActions.getCurrentFamilyError(message)),
    );
};

const updateGifts = () => dispatch => {
  dispatch(familyActions.updateGiftsRequest());

  axios
    .put('api/gifts/unpack')
    .then(({ data }) => dispatch(familyActions.updateGiftsSuccess(data)))
    .catch(({ message }) => dispatch(familyActions.updateGiftsError(message)));
};

export default {
  addFamily,
  updateFamily,
  getCurrentFamily,
  updateGifts,
};
