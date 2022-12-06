import axios from 'axios';

import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from '../transactions/transaction-actions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//GET
const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionRequest());

  try {
    const { data } = await axios.get('/transactions');

    dispatch(fetchTransactionSuccess(data.data.transactions));
  } catch (error) {
    dispatch(fetchTransactionError(error.message));
  }
};

//POST
const addTransaction = transactionData => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const { data } = await axios.post('/transactions', transactionData);
    // console.log('data', data.data.result);
    dispatch(addTransactionSuccess(data.data.result));
  } catch (error) {
    dispatch(addTransactionError(error.message));
    toast.error(' Недостаточно средств на счету', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
};

export { fetchTransactions, addTransaction };