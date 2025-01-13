import React, { useState } from "react";
import Accounts from "../Components/Utils/Accounts/Accounts";
import EditUserInfo from "../Components/Utils/Forms/EditUserInfo";
import Main from "../Components/Layouts/Main";
import { useSelector } from "react-redux";
import Button from '../Components/Button/Button';
import GetTitle from '../Components/Layouts/GetTitle';
import { Navigate } from "react-router-dom";

function User() {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
 

  const isUserCurrentlyLoggedIn = user && user.isLoggedIn;
 
  if (!isUserCurrentlyLoggedIn) {
     return <Navigate to="/sign-in" />;
  }

  const toggleEditing = () => {
    setIsEditing(current => !current);
 };

  return (
     <Main>
       <GetTitle title="User page"/>
       <div className="main bg-dark">
         <div className="header">
           {!isEditing && (
             <>
              <h1>Welcome back<br /> {`${user.user.firstName} ${user.user.lastName}`}!</h1>
               <Button className="edit-button" onClick={toggleEditing}>Edit Name</Button>
             </>
           )}
            {isEditing && (
             <>
               <EditUserInfo onCancel={toggleEditing} onSave={toggleEditing}/>
             </>
           )}
         </div>
         <Accounts />
       </div>
     </Main>
  );
 }
 
 export default User;

