import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Error from '../Pages/Error';


const RoutesTree = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default RoutesTree;
