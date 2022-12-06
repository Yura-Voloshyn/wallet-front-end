import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './authOperation';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
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
  },
});

export default authSlice.reducer;
