import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
// import User from '../Pages/User';
import Error from '../Pages/Error';


const RoutesTree = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Login />} />
      {/* <Route path="/user/:id" 
        element={<User username={userId}/>}/> */}
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default RoutesTree;
