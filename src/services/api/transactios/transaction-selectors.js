const getTransactionCategories = state =>state.transactions.getCategories;
const getAddTransactions = state => state.transactions.addTransactions;

  const transSelectors = {
  getTransactionCategories,
  getAddTransactions,
};

export default transSelectors;