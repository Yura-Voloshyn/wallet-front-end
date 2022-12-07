import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/auth';

// ПРОПИСАТИ API ШЛЯХ//
axios.defaults.baseURL = 'https://wallet-jet.vercel.app/api';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ``;
  },
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
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
