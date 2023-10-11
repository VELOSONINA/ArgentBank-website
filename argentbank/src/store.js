import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/userSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true, 
});

export default store;
