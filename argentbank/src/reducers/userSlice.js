import { createSlice } from "@reduxjs/toolkit";
import { authenticateUser , checkUserAuthentication } from '../Api/Authentication';


const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    isLoggedIn: checkUserAuthentication(),
  },
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(authenticateUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});
export default userSlice.reducer;
export const { logOut } = userSlice.actions;
