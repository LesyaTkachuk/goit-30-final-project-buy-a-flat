import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const getFamily = () => dispatch => {
  dispatch(familyActions.getfamilyRequest());

  axios
    .get('/family')
    .then(({ data }) => dispatch(familyActions.getFamilySuccess(data)))
    .catch(({ message }) => dispatch(familyActions.getFamilyError(message)));
};

const addFamily = credentials => dispatch => {
  dispatch(familyActions.addFamilyRequest());

  axios
    .post('/family', credentials)
    .then(({ data }) => dispatch(familyActions.addFamilyuccess(data)))
    .catch(({ message }) => dispatch(familyActions.addFamilyError(message)));
};

const updateFamily = credentials => dispatch => {
  dispatch(familyActions.updateFamilyRequest());

  axios
    .put(`/family`, credentials)
    .then(data => dispatch(familyActions.updateFamilyuccess(data)))
    .catch(({ message }) => dispatch(familyActions.updateFamilyError(message)));
};

const getCurrentFamily = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  dispatch(familyActions.getCurrentFamilyRequest());

  axios
    .get(`/family/current`)
    .then(data => dispatch(familyActions.getCurrentFamilyuccess(data)))
    .catch(({ message }) =>
      dispatch(familyActions.getCurrentFamilyError(message)),
    );
};

export default {
  getFamily,
  addFamily,
  updateFamily,
  getCurrentFamily,
};
