import React from "react";
import Accounts from "../Components/Users/Accounts";
import UserHeader from "../Components/Users/userHeader";
import Main from "../Components/Main";

function User() {
  
  return (
    <Main>
      <div className="main bg-dark">
        <UserHeader />
        <Accounts />
      </div>
    </Main>
  );
}
export default User;
