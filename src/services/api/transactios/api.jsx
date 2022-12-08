import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet-jet.vercel.app/api',
});

export const getTransactions = async () => {
    const { data } = await instance.get('/trasactions');
  
    return data;
  };

  //post
export const addTransaction = async() => {
        const { data } = await axios.post(`/transactions`);
      
        return data;
};

export const fetchTransactionsByCategory = async()=>{
      const { data } = await axios.get(
        `/transactions/categories`
      );
      return data;
  };

const transOperations = {
  getTransactions,
  addTransaction,
  fetchTransactionsByCategory,
};

export default transOperations;
