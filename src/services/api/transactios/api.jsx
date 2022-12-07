import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet-jet.vercel.app/api',
});

export const getTransactions = async () => {
    const { data } = await instance.get('/trasactions');
  
    return data;
  };