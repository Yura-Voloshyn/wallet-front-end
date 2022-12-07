import axios from 'axios';

const CATERGORIES_URL =
  'https://wallet-jet.vercel.app/api/transactions/categories';

export const getCategories = async () => {
  const res = await axios.get(CATERGORIES_URL);
  return res.data;
};

// export default getCategories;
