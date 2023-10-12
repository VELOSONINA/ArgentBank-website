import { createSlice } from '@reduxjs/toolkit';
import { editUserNameAsync } from '../actions/userAction.js';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    error: null, 
    loading: false,
    isLoggedIn: false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    logOut: (state) => {
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editUserNameAsync.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(editUserNameAsync.fulfilled, (state, action) => {
        state.userName = action.payload;
        state.loading = false; 
        state.error = null;
        state.isLoggedIn = true; 
      })
      .addCase(editUserNameAsync.rejected, (state, action) => {
        state.error = action.error.message; 
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
