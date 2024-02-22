import { createSlice } from "@reduxjs/toolkit";
import { authenticateUser, editUserInfo, checkUserAuthentication } from '../Api/Authentication';

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: "",
    error: null,
    isLoggedIn: checkUserAuthentication(),
  },
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("token");
      state.user = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.user = "";
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) { 
          state.user = {
            email: action.payload.email,
            token: action.payload.token,
            firstName: action.payload.data.firstName,
            lastName: action.payload.data.lastName,
            userName: action.payload.data.userName,
          };
        }
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editUserInfo.fulfilled, (state, action) => {
        if (action.payload) { 
          let user = state.user;
          user.userName = action.payload.body.userName;
          state.user = user;
          state.status = true;
        }
      });
  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
