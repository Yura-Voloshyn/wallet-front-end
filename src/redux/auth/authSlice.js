import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogin,
  userLogout,
  refreshUser,
} from './authOperation';

const initialState = {
  user: { firstName: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = null;
      state.isLoading = false;
    });
    builder.addCase(userRegistration.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = null;
      state.isLoading = false;
    });
    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userLogout.fulfilled, state => {
      state.user = { name: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshingUser = false;
      state.isError = null;
      state.isLoading = false;
    });
    builder.addCase(userLogout.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
      state.isError = null;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.user = { name: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshingUser = false;
      state.isError = action.payload;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshingUser = true;
      state.isError = null;
    });
  },
});

export default authSlice.reducer;
