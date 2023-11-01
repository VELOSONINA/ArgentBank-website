import { createSlice } from "@reduxjs/toolkit";
import { authenticateUser , checkUserAuthentication } from '../Api/Authentication';


const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
    isLoggedIn: checkUserAuthentication(),
  },
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;
export const { logOut } = authSlice.actions;
