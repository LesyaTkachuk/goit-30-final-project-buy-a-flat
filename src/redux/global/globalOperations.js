import axios from 'axios';
import globalActions from './globalActions';

axios.defaults.baseURL = 'https://';

const getTransactions = () => dispatch => {
  globalActions.getCategoriesRequest();

  axios
    .get('/api/transactions/categories')
    .then(({ data }) => dispatch(globalActions.getCategoriesSuccess()))
    .catch(({ message, code }) =>
      dispatch(globalActions.getCategoriesError({ message, code })),
    );
};

export default {
  getTransactions,
};
