import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getTransactions,
  addTransaction,
  getMoreTransactions,
} from 'services/api/transactios/api';

export const fetchTransactions = createAsyncThunk(
  'transactions',
  async (_, { rejectWithValue }) => {
    try {
     const data = await getTransactions();

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

export const fetchMoreTransaction = createAsyncThunk(
  'transactions-more',
  async (page, { rejectWithValue }) => {
    try {
      
      const data = await getMoreTransactions(page);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);