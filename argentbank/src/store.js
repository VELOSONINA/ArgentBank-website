import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/userSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer
  },
  devTools: true,
});

export default store;
