import instance from '../auth';

export const getTransactions = async () => {
  const { data } = await instance.get('/api/trasactions');
  return data;
};

//post
export const addTransaction = async () => {
  const { data } = await instance.post('/api/transactions');

  return data;
};

export const fetchTransactionsByCategory = async () => {
  const { data } = await instance.get('/api/transactions/categories');
  return data;
};

const transOperations = {
  getTransactions,
  addTransaction,
  fetchTransactionsByCategory,
};

export default transOperations;
