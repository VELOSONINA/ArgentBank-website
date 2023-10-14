import React from "react";
import Accounts from "../Components/Users/Accounts";
import UserProfileHeader from "../Components/Users/UserProfileHeader";
import Main from "../Components/Main";
import { useSelector } from "react-redux";
import { selectLogIn } from "../reducers/selectors";
import { Navigate } from "react-router-dom";
import Layout from "../Components/Layouts/layout";

function User() {
  const user = useSelector(selectLogIn);
  const isConnected = () => {
    if (user.isLoggedIn === true) {
      return true;
    }
  };
  if (!isConnected()) {
    return <Navigate to="/sign-in" />;
  }
  
  return (
    <Layout title="Argent Bank - User page">
      <Main>
        <div className="main bg-dark">
          <UserProfileHeader />
          <Accounts />
        </div>
      </Main>
    </Layout>
  );
}
export default User;
