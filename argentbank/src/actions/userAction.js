import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { logOut } from "../reducers/userSlice";

export const editUserNameAsync = createAsyncThunk('user/editUserName', async (userName, { dispatch }) => {
  try {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
      userName: userName,
    });
    
    if (response.status === 200) {
      const editData = response.data.body.userName;
      dispatch(logOut(editData));
      return true;
    }

  } catch (error) {
    console.error(`Error:`, error.response ? error.response.data.message : error.message);
    return false;
  }
});
