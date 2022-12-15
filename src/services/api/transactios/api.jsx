import instance from '../auth';

export const getTransactions = async page => {
  const data = await instance.get(`/api/transactions?page=${page}`);
  return data;
};

//post
export const addTransaction = async data => {
  const { data: result } = await instance.post('/api/transactions', data);

  return result;
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
