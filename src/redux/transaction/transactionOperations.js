import axios from 'axios';
import transactionActions from './transactionActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

// token-?

const getTransactions = () => dispatch => {
  transactionActions.getCategoriesRequest();

  axios
    .get('/api/transactions/categories')
    .then(({ data }) => dispatch(transactionActions.getCategoriesSuccess()))
    .catch(({ message }) =>
      dispatch(transactionActions.getCategoriesError(message)),
    );
};

const createItem = credentials => dispatch => {
  transactionActions.createItemRequest();

  axios
    .post('/api/transactions')
    .then(({ data }) => dispatch(transactionActions.createItemSuccess(data)))
    .catch(({ message }) =>
      dispatch(transactionActions.createItemError(message)),
    );
};

export default {
  getTransactions,
  createItem,
};
