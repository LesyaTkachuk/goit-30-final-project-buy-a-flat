import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://';

const addFamily = credentials => dispatch => {
  dispatch(familyActions.addFamilyRequest());

  axios
    .post('/api/families', credentials)
    .then(({ data }) => dispatch(familyActions.addFamilySuccess(data)))
    .catch(({ message, code }) =>
      dispatch(familyActions.addFamilyError({ message, code })),
    );
};

const updateFamily = credentials => dispatch => {
  dispatch(familyActions.updateFamilyRequest());

  axios
    .put(`/api/families`, credentials)
    .then(({ data }) => dispatch(familyActions.updateFamilySuccess(data)))
    .catch(({ message, code }) =>
      dispatch(familyActions.updateFamilyError({ message, code })),
    );
};

const getCurrentFamily = () => (dispatch, getState) => {
  const {
    auth: {
      user: { familyId },
    },
  } = getState();

  if (!familyId) {
    return;
  }

  dispatch(familyActions.getCurrentFamilyRequest());

  axios
    .get(`/api/families/current/${familyId}`)
    .then(({ data }) => dispatch(familyActions.getCurrentFamilySuccess(data)))
    .catch(({ message, code }) =>
      dispatch(familyActions.getCurrentFamilyError({ message, code })),
    );
};

const createTransaction = credentials => dispatch => {
  familyActions.createTransactionRequest();

  axios
    .post('/api/transactions', credentials)
    .then(({ data }) => dispatch(familyActions.createTransactionSuccess(data)))
    .catch(({ message, code }) =>
      dispatch(familyActions.createTransactionError({ message, code })),
    );
};

const getChartData = () => (dispatch, getState) => {
  const {
    auth: { user: familyId },
    global: {
      chartDate: { chartMonth, chartYear },
      currentDate: { currentMonth, currentYear },
    },
  } = getState();

  if (!familyId) {
    return;
  }

  const monthForRequest = chartMonth ? chartMonth : currentMonth;
  const yearForRequest = chartYear ? chartYear : currentYear;

  dispatch(familyActions.getChartDataRequest());

  axios
    .get(
      `/api/finance-stats/annual/:${familyId}?${monthForRequest}&${yearForRequest}`,
    )
    .then(({ data }) => dispatch(familyActions.getChartDataSuccess(data)))
    .catch(({ message, code }) =>
      familyActions.getCurrentFamilyError({ message, code }),
    );
};

const getFinanceData = () => (dispatch, getState) => {
  const {
    auth: {
      user: { familyId },
    },
  } = getState();

  if (!familyId) {
    return;
  }

  dispatch(familyActions.getFinanceDataRequest());

  axios
    .get('/api/finance-stats/flat')
    .then(({ data }) => dispatch(data))
    .catch(({ message, code }) =>
      dispatch(familyActions.getFinanceDataError({ message, code })),
    );
};

const updateGifts = () => dispatch => {
  dispatch(familyActions.updateGiftsRequest());

  axios
    .put('api/gifts/unpack')
    .then(({ data }) => dispatch(familyActions.updateGiftsSuccess(data)))
    .catch(({ message, code }) =>
      dispatch(familyActions.updateGiftsError({ message, code })),
    );
};

export default {
  addFamily,
  updateFamily,
  getCurrentFamily,
  createTransaction,
  getChartData,
  getFinanceData,
  updateGifts,
};
