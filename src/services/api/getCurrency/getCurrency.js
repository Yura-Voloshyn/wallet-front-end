import axios from 'axios';
const CURRENCY_URL = 'https://api.monobank.ua/bank/currency';

const getCurrency = async () => {
  const res = await axios.get(CURRENCY_URL);
  return res.data.slice(0, 2);
};

export default getCurrency;
