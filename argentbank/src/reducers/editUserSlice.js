import { createSlice } from "@reduxjs/toolkit";

const editUserSlice = createSlice({
  name: "editUser",
  initialState: { open: false },
  reducers: {
    toggleEdit: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleEdit } = editUserSlice.actions;
export const editUserReducer = editUserSlice.reducer;