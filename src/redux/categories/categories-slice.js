import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from './categories-operations';

const initialState = {
  items: [],
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [fetchCategories.pending]: store => {
      store.error = null;
    },
    [fetchCategories.fulfilled]: (store, { payload }) => {
      store.items = payload;
    },
    [fetchCategories.rejected]: (store, { payload }) => {
      store.error = payload;
    },
  },
});

export default categoriesSlice.reducer;
