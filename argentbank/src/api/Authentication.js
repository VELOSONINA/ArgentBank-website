import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkUserAuthentication  = () => {
  return localStorage.getItem("token") === "true";
};

const urlAuthentication = 'http://localhost:3001/api/v1/user/login';

export const authenticateUser  = createAsyncThunk(
  "auth/authenticateUser ",
  async (credentials, { rejectWithValue }) => {
    try {

      if (!credentials.email || !credentials.password) {
        return rejectWithValue("Veuillez remplir tous les champs.");
      }

      const response = await axios.post(urlAuthentication, credentials);

      localStorage.setItem("token", response.data.token);

      return response.data.user;
  
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return rejectWithValue("Identifiants incorrects");
      } else {
        return rejectWithValue("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  }
);
