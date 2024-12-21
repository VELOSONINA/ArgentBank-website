import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkUserAuthentication  = () => {
  return localStorage.getItem("token") === "true";
};

const urlProfileFetcher = 'http://localhost:3001/api/v1/user/profile';
const urlAuthentication = 'http://localhost:3001/api/v1/user/login';

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await fetch(urlAuthentication, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("email ou password erroné!");
          }
        })
        .then((data) => {
          return data;
        });
      const user = await getUserProfile(response.body.token);
      return { email: email, data: user.body, token: response.body.token };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


// edit username
export const editUserInfo = createAsyncThunk(
  "auth/editUserInfo",
  async ({ userName, token }, thunkApi) => {
    try {
      const response = await fetch(
        urlProfileFetcher,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ userName }),
        }
      ).then((response) => {
        if (response.ok) {
          console.log("edituserNameApi", userName)
          return response.json();
        }
      });
      return response;
    } catch (error) {
      console.log("erreur api edit")
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// get user information
async function getUserProfile(token) {
  const response = await fetch(urlProfileFetcher, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "Une erreur est survenue. Veuillez réessayer."
      );
    }
  });
  return response;
}