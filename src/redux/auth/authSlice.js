import { createSlice } from '@reduxjs/toolkit';
import { userLogin, logout, signup, current } from './authOperation';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signup.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
    builder.addCase(logout.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = {};
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
    builder.addCase(current.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(current.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    });
    builder.addCase(current.rejected, (state, action) => {
      state.isLoading = false;
      state.token = '';
      state.isError = action.payload;
    });
  },
});

export default authSlice.reducer;
