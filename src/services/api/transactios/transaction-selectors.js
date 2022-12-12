const getTransactionCategories = state =>state.transactions.getCategories;
const getAddTransactions = state => state.transactions.addTransaction;

  const transSelectors = {
  getTransactionCategories,
  getAddTransactions,
};

export default transSelectors;
