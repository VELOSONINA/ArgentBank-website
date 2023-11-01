import React from "react";
import Accounts from "../Components/Utils/Accounts/Accounts";
import Main from "../Components/Main";
import { useSelector } from "react-redux";
import Button from '../Components/Button';
import GetTitle from '../Components/GetTitle';

import { Navigate } from "react-router-dom";


function User() {
  const user = useSelector((state) => state.user);

  // Vérifier si l'utilisateur est actuellement connecté
  const isUserCurrentlyLoggedIn = user && user.isLoggedIn;

  if (!isUserCurrentlyLoggedIn) {
    return <Navigate to="/sign-in" />;
  }
  
  return (
      <Main>
      <GetTitle title="User page"/>
        <div className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />{user && user.firstName}!</h1>
            <Button className="edit-button">Edit Name</Button>
          </div>
          <Accounts />
        </div>
      </Main>
  );
}
export default User;
