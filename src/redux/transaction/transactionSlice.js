import { createSlice } from '@reduxjs/toolkit';

import { fetchTransactions } from './transactionOperation';

const initialState = {
  transactions: [],
  loading: false,
  error: null,
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
      store.loading = false;
      store.transactions = [...payload.data.data.result]
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.massege;
    },
  },
});

export default transactionsSlice.reducer;
