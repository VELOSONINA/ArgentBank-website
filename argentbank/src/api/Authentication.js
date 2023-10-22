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

      if (!credentials.email || !credentials.password) {
        return rejectWithValue("Veuillez remplir tous les champs.");
      }

      const response = await axios.post(urlAuthentication, credentials);

      if (response.status === 200) {
        const token = response.data.body.token;

        // Stockage du token dans le stockage local
        localStorage.setItem('token', token);

        return response.data;
      } else {
        return rejectWithValue("Erreur d'authentification.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue("Erreur d'authentification");
      } else {
        return rejectWithValue("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  }
);
