import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTransactions, addTransaction } from 'services/api/transactios/api';

export const fetchTransactions = createAsyncThunk(
  'transactions',
  async (_, thunkAPI) => {
    try {
      const data = await getTransactions();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
