import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTransactions, addTransaction } from 'services/api/transactios/api';

export const fetchTransactions = createAsyncThunk(
  'transactions',
  async (page, { rejectWithValue }) => {
    try {
      const data = await getTransactions(page);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postTransaction = createAsyncThunk(
  'transaction',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addTransaction(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
