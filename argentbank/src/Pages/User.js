import React from "react";
import Accounts from "../Components/accounts/Accounts";
import Button from "../Components/Button";


function User() {
  
  return (
    <>
      <div className="main bg-dark">
        <Button/>
        <userHeader />
        <Accounts />
      </div>
    </>
  );
}
export default User;
