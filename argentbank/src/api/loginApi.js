import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { displayErrorMessage, clearErrorMessage } from "../reducers/errorMessageSlice";

export const isUserLoggedIn = () => {
  return localStorage.getItem("IsLoggedIn") === "true";
};

const urlUserLogin = 'http://localhost:3001/api/v1/user/login';

export const loginUser = createAsyncThunk(
  "user/loginUser",
  
  async (credentials, { handleError }) => {
    try {  
      const response = await axios.post(urlUserLogin, credentials);

      const token = response.data.body.token;
      const responseData = response.data;

      // Stocker le token dans le local storage
      localStorage.setItem("IsLoggedIn", "true");
      localStorage.setItem('token', token);

      return responseData;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) { 
          return handleError("Erreur d'authentification");
        } else {
          return handleError("Une erreur est survenue. Veuillez réessayer.");
        }
      } else {
        return handleError("Problème de connexion. Vérifiez votre réseau.");
      }
    }
  }
);
