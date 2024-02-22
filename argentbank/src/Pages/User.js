import React, { useState, useEffect } from "react";
import Accounts from "../Components/Utils/Accounts/Accounts";
import EditUserInfo from "../Components/Utils/Forms/EditUserInfo";
import Main from "../Components/Main";
import { useSelector } from "react-redux";
import Button from '../Components/Button';
import GetTitle from '../Components/GetTitle';
import { Navigate } from "react-router-dom";

function User() {
  const user = useSelector((state) => state.user);
  const [isEditingName, setIsEditingName] = useState(false); // Initialisé à false par défaut
  const [isEditingInfo, setIsEditingInfo] = useState(false); // Initialisé à false par défaut

  // Vérifier si l'utilisateur est actuellement connecté
  const isUserCurrentlyLoggedIn = user && user.isLoggedIn;

  useEffect(() => {
    // Mettre à jour l'état en fonction de la connexion de l'utilisateur
    if (isUserCurrentlyLoggedIn) {
      setIsEditingName(true);
      setIsEditingInfo(true);
    }

    console.log("isEditingName:", isEditingName);
    console.log("isEditingInfo:", isEditingInfo);
  }, [isUserCurrentlyLoggedIn,isEditingName, isEditingInfo]);

  if (!isUserCurrentlyLoggedIn) {
    return <Navigate to="/sign-in" />;
  }
  
  const handleEditNameClick = () => {
    setIsEditingName(false);
    setIsEditingInfo(false);
  };

  const handleEditCancel = () => {
    setIsEditingName(false);
    setIsEditingInfo(false);
  };

  const handleSaveClick = () => {
    setIsEditingInfo(true); 
    setIsEditingName(true);
  };

  return (
    <Main>
      <GetTitle title="User page"/>
      <div className="main bg-dark">
      <div className="header">
          {(!isEditingName && !isEditingInfo) && (
            <>
              <h1>Welcome back<br /> {`${user.firstName} ${user.lastName}`}!</h1>
              <Button className="edit-button" onClick={handleEditNameClick}>Edit Name</Button>
            </>
          )}
          {isEditingInfo && <EditUserInfo onCancel={handleEditCancel} onSave={handleSaveClick}/>}
        </div>
        <Accounts />
      </div>
    </Main>
  );
}

export default User;
