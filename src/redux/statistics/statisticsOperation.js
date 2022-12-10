import getStatistics from 'services/api/getStatistics/getStatistics';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const statistics = createAsyncThunk(
  'statistics/transactions',
  async (data, { rejectWithValue }) => {
    try {
      const result = await getStatistics(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
