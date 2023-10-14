import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'; 
import {userDataReducer} from './reducers/userDataSlice';
import {editUserReducer} from "./reducers/editUserSlice";
import errorMessageReducer from "./reducers/errorMessageSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    userData: userDataReducer,
    editUser: editUserReducer,
    errorMessage: errorMessageReducer,
  },
  devTools: true,
});

export default store;
