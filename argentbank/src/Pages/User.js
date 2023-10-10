import React from "react";
import Accounts from "../Components/Users/Accounts";
import Layout from "../Components/Layout";


function User() {
  
  return (
    <Layout>
      <div className="main bg-dark">
        <userHeader />
        <Accounts />
      </div>
    </Layout>
  );
}
export default User;
