import { statistics } from './statisticsOperation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
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
      store.data = payload.data.data;
    },
    [statistics.rejected]: (store, { payload }) => {
      store.loading = false;
      store.isError = payload;
    },
  },
});

export default statisticsSlice.reducer;
