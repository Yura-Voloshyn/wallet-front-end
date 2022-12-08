import { createSlice } from '@reduxjs/toolkit';

import { fetchTransactions } from './transactionOperation';


const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState, 

  extraReducers: {
    [fetchTransactions.pending]: (store) => {
      store.loading = true;
      store.error = null;
  },
    [fetchTransactions.fulfilled]: (store, {payload}) => {
      store.loading = false; 
      store.items = payload;
  },
    [fetchTransactions.rejected]: (store, {payload}) => {
      store.loading = false;
      store.error = payload;
  },
  }
});