import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://flat-finance.herokuapp.com';

const addFamily = credentials => dispatch => {
  dispatch(familyActions.addFamilyRequest());

  axios
    .post('/api/families', credentials)
    .then(({ data }) => dispatch(familyActions.addFamilySuccess(data)))
    .catch(({ message, status }) =>
      dispatch(familyActions.addFamilyError({ message, status })),
    );
};

const updateFamily = credentials => dispatch => {
  dispatch(familyActions.updateFamilyRequest());

  axios
    .put(`/api/families`, credentials)
    .then(({ data }) => dispatch(familyActions.updateFamilySuccess(data)))
    .catch(({ message, status }) =>
      dispatch(familyActions.updateFamilyError({ message, status })),
    );
};

const getCurrentFamily = () => dispatch => {
  dispatch(familyActions.getCurrentFamilyRequest());

  axios
    .get(`/api/families/current`)
    .then(({ data }) => dispatch(familyActions.getCurrentFamilySuccess(data)))
    .catch(({ message, status }) =>
      dispatch(familyActions.getCurrentFamilyError({ message, status })),
    );
};

const getTransactions = () => dispatch => {
  familyActions.getCategoriesRequest();

  axios
    .get('/api/transactions/categories')
    .then(({ data }) => dispatch(familyActions.getCategoriesSuccess()))
    .catch(({ message, status }) =>
      dispatch(familyActions.getCategoriesError({ message, status })),
    );
};

const createTransaction = credentials => dispatch => {
  familyActions.createTransactionRequest();

  axios
    .post('/api/transactions', credentials)
    .then(({ data }) => dispatch(familyActions.createTransactionSuccess(data)))
    .catch(({ message, status }) =>
      dispatch(familyActions.createTransactionError({ message, status })),
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
    .catch(({ message, status }) =>
      familyActions.getCurrentFamilyError({ message, status }),
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
    .catch(({ message, status }) =>
      dispatch(familyActions.getFinanceDataError({ message, status })),
    );
};

const updateGifts = () => dispatch => {
  dispatch(familyActions.updateGiftsRequest());

  axios
    .put('api/gifts/unpack')
    .then(({ data }) => dispatch(familyActions.updateGiftsSuccess(data)))
    .catch(({ message, status }) =>
      dispatch(familyActions.updateGiftsError({ message, status })),
    );
};

export default {
  addFamily,
  updateFamily,
  getCurrentFamily,
  getTransactions,
  createTransaction,
  getChartData,
  getFinanceData,
  updateGifts,
};
