const getShowNavPage = state => state.global.showNavPage;

const getIsModalOpen = state => state.global.isModalOpen;

const getShowLoginForm = state => state.global.showLogin;

const getTransactionCategories = state => state.global.transactionCategories;

export default {
  getShowNavPage,
  getIsModalOpen,
  getShowLoginForm,
  getTransactionCategories,
};
