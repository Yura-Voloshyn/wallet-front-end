import instance from '../auth';

export const getTransactions = async () => {
  const data = await instance.get('/api/transactions');
  console.log(data);
  return data;
};


export const getMoreTransactions = async page => {
  
  const data = await instance.get(`/api/transactions?page=${page}`);
   console.log(data)
  return data;
}
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
  getMoreTransactions,
};

export default transOperations;
