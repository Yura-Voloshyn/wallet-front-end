import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  postTransaction,
  fetchMoreTransaction,
} from './transactionOperation';

const initialState = {
  transactions: [],
  loading: false,
  error: null,
  totalPages: 0,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    [fetchTransactions.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchTransactions.fulfilled]: (store, { payload }) => {
      const data = payload.data.data;
      store.loading = false;
      store.transactions = [...data.result];
      store.totalPages = data.totalPages;
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.message;
    },
    [postTransaction.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [postTransaction.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.transactions = [payload.data, ...store.transactions];
    },
    [postTransaction.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.message;
    },

    [fetchMoreTransaction.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchMoreTransaction.fulfilled]: (store, { payload }) => {
      store.loading = false;
      payload.data.data.result.forEach(result => {
        store.transactions = [...store.transactions, result];
      });
    },
    [fetchMoreTransaction.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.message;
    },
  },
});

export default transactionsSlice.reducer;
