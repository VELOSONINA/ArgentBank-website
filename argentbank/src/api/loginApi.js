import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { displayErrorMessage, clearErrorMessage } from "../reducers/errorMessageSlice";

export const isUserLoggedIn = () => {
  return localStorage.getItem("IsLoggedIn") === "true";
};

const urlUserLogin = 'http://localhost:3001/api/v1/user/login';

export const loginUser = createAsyncThunk(
  "user/loginUser",
  
  async (credentials, { handleError, dispatch }) => {
    try {  
      const response = await axios.post(urlUserLogin, credentials);

      const token = response.data.body.token;
      const responseData = response.data.data;

      // Stocker le token dans le local storage
      localStorage.setItem("IsLoggedIn", "true");
      localStorage.setItem('token', token);

      return responseData;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) { 
          // Affiche le message d'erreur
          dispatch(displayErrorMessage("Identifiants incorrects. Veuillez réessayer."));

          // Efface le message d'erreur après 4 secondes
          setTimeout(() => {
            dispatch(clearErrorMessage());
          }, 4000);

          return handleError("Erreur d'authentification");
        } else {
          dispatch(displayErrorMessage("Une erreur est survenue. Veuillez réessayer."));

          setTimeout(() => {
            dispatch(clearErrorMessage());
          }, 4000);

          return handleError("Une erreur est survenue. Veuillez réessayer.");
        }
      } else {
        dispatch(displayErrorMessage("Problème de connexion. Vérifiez votre réseau."));

        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 4000);

        return handleError("Problème de connexion. Vérifiez votre réseau.");
      }
    }
  }
);
