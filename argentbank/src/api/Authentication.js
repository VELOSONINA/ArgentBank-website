import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkUserAuthentication  = () => {
  return localStorage.getItem("token") === "true";
};

const urlAuthentication = 'http://localhost:3001/api/v1/user/login';

export const authenticateUser  = createAsyncThunk(
  "user/authenticateUser ",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(urlAuthentication, credentials.Credentials);
      const token = response.data.body.token;

      // Stocker le jeton dans le stockage local
      localStorage.setItem('token', token);

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue("Erreur d'authentification");
      } else {
        return rejectWithValue("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  }
);
