// import axios from 'axios';
import instance from '../auth';

export const getCategories = async () => {
  const { data } = await instance.get('/api/transactions/categories');
  return data;
};

export default getCategories;
