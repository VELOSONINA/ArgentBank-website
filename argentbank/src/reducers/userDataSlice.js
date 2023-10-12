import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    saveUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    editUserName: (state, action) => {
      state.userName = action.payload; 
    },
    removeUserData: (state) => {
      return state = {};
      ; 
    },
  },
});

export const { saveUserData, editUserName, removeUserData } = userDataSlice.actions;
export const userDataReducer = userDataSlice.reducer;