import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/index.scss';
import App from './App';

//Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from './reducers';


const store = configureStore({
  reducer: rootReducer, 
  devTools: true}
  );

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
);

