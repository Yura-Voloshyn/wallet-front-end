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
<<<<<<< HEAD
      store.loading = false;
      store.transactions = [...payload.data.data.result]
      store.items = payload;
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.massege;
=======
      // console.log(payload);
      store.loading = false;
      store.items = payload;
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      // store.loading = false;
      store.error = payload;
>>>>>>> dev
    },
  },
});

export default transactionsSlice.reducer;
