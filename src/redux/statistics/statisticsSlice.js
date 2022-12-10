import { statistics } from './statisticsOperation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      owner: '6392ef8d93eaa1dd4d5ab382',
      totalIncome: 6000,
      totalExpense: 8000,
      totalCategories: [
        {
          _id: 'car',
          totalSum: 5000,
        },
        {
          _id: 'products',
          totalSum: 3000,
        },
        {
          _id: 'Main expenses',
          totalSum: 5000,
        },
        {
          _id: 'Self care',
          totalSum: 5000,
        },
        {
          _id: 'Other expenses',
          totalSum: 5000,
        },
        {
          _id: 'Education',
          totalSum: 1000,
        },
        {
          _id: 'Leisure',
          totalSum: 1000,
        },
        {
          _id: 'Entertainment',
          totalSum: 2000,
        },
        { _id: 'Household products', totalSum: '5000' },
      ],
    },
  ],
  isLoading: false,
  isError: null,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [statistics.pending]: store => {
      store.isLoading = true;
      store.isError = null;
    },
    [statistics.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.data = payload;
    },
    [statistics.rejected]: (store, { payload }) => {
      store.loading = false;
      store.isError = payload;
    },
  },
});

export default statisticsSlice.reducer;
