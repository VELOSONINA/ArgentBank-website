import { createSlice } from "@reduxjs/toolkit";
import { loginUser, checkUserAuthentication } from '../Api/LoginApi';


const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    isLogged: checkUserAuthentication(),
  },
  reducers: {
    logOut: (state) => {
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLogged = false;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isLogged = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.isLogged = false;
      });
  },
});
export default userSlice.reducer;
export const { logOut } = userSlice.actions;
