import axios from 'axios';
import familyActions from './familyActions';

axios.defaults.baseURL = 'https://flat-finance.herokuapp.com';

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

const getCurrentFamily = () => dispatch => {
  dispatch(familyActions.getCurrentFamilyRequest());

  axios
    .get(`/api/families/current`)
    .then(({ data }) => dispatch(familyActions.getCurrentFamilySuccess(data)))
    .catch(({ message }) =>
      dispatch(familyActions.getCurrentFamilyError(message)),
    );
};

// const getCurrentFamily = () => async dispatch => {
//   try {
//     dispatch(familyActions.getCurrentFamilyRequest());

//     const { data } = await axios.get(`/api/families/current`);
//     dispatch(familyActions.getCurrentFamilySuccess(data));
//   } catch ({ message }) {
//     dispatch(familyActions.getCurrentFamilyError(message));
//   }
// };

const getTransactions = () => dispatch => {
  familyActions.getCategoriesRequest();

  axios
    .get('/api/transactions/categories')
    .then(({ data }) =>
      dispatch(familyActions.getCategoriesSuccess(data.transactionCategories)),
    )
    .catch(({ message }) =>
      dispatch(familyActions.getCategoriesError(message)),
    );
};

const createTransaction = credentials => dispatch => {
  familyActions.createTransactionRequest();

  axios
    .post('/api/transactions', credentials)
    .then(({ data }) => dispatch(familyActions.createTransactionSuccess(data)))
    .catch(({ message }) =>
      dispatch(familyActions.createTransactionError(message)),
    );
};

const getChartData = () => (dispatch, getState) => {
  const {
    global: {
      chartDate: { chartMonth, chartYear },
      currentDate: { currentMonth, currentYear },
    },
  } = getState();

  const month = chartMonth || currentMonth;
  const year = chartYear || currentYear;

  dispatch(familyActions.getChartDataRequest());

  axios
    .get(`/api/transactions/stats/annual?month=${month}&year=${year}`)
    .then(({ data }) => dispatch(familyActions.getChartDataSuccess(data)))
    .catch(({ message }) => familyActions.getCurrentFamilyError(message));
};

const getFinanceData = () => dispatch => {
  dispatch(familyActions.getFinanceDataRequest());

  axios
    .get('/api/families/stats/flat')
    .then(({ data }) => dispatch(data))
    .catch(({ message }) =>
      dispatch(familyActions.getFinanceDataError(message)),
    );
};

const updateGifts = () => dispatch => {
  dispatch(familyActions.updateGiftsRequest());

  axios
    .put('api/gifts/unpack')
    .then(({ data }) => dispatch(familyActions.updateGiftsSuccess(data.gifts)))
    .catch(({ message }) => dispatch(familyActions.updateGiftsError(message)));
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
