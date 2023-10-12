import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'; 
// import userDataReducer from './reducers/userDataSlice.js';
// import editUserReducer from "./reducers/editUserSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    // userData: userDataReducer,
    // editUser: editUserReducer,
  },
  devTools: true,
});

export default store;
