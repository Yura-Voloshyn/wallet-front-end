import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/getCategories/getCategories';

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
