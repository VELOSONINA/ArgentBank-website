import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage/session';
import { persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import authSliceReducer from './Reducers/authSlice'; 

const reducers = combineReducers({
  user: authSliceReducer
})

const persistConfig = {
  key:'root' ,
  storage ,
  whitelist: ['user']
}
const persistedReducer = persistReducer ( persistConfig , reducers)

const store = configureStore({
  reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })

export default store;
