// import axios from 'axios';
import instance from '../auth';
// const CATERGORIES_URL =
//   'https://wallet-jet.vercel.app/api/transactions/categories';

export const getCategories = async () => {
  const { data } = await instance.get('api/transactions/categories');
  return data;
};

// export default getCategories;
