import { createSlice } from '@reduxjs/toolkit';
import { userLogin, logout } from './authOperation';
import { signup } from './authOperation';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
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
    builder.addCase(logout.pending, state => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
