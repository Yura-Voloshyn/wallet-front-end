import instance from '../auth';

export const getTransactions = async () => {
  const { data } = await instance.get('/api/transactions');

  return data;
};
