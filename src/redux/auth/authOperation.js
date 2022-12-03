import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ПРОПИСАТИ API ШЛЯХ//
axios.defaults.baseURL = '';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ``;
  },
};

export const userLogin = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue('login failed');
    }
  }
);
