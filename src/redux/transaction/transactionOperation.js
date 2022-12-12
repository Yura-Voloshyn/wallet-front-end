import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTransactions } from 'services/api/transactios/api';

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
