import React from "react";
import Accounts from "../Components/Users/Accounts";
import Main from "../Components/Main";
import { useSelector } from "react-redux";
import Button from '../Components/Button';

import { Navigate } from "react-router-dom";
import Title from "../Components/Title";

function User() {
  const user = useSelector();
  const isConnected = () => {
    if (user.isLogged === true) {
      return true;
    }
  };
  if (!isConnected()) {
    return <Navigate to="/sign-in" />;
  }
  
  return (
    <Title title="Argent Bank - User page">
      <Main>
        <div className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <Button className="edit-button">Edit Name</Button>
          </div>
          <Accounts />
        </div>
      </Main>
    </Title>
  );
}
export default User;
