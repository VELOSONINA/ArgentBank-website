// import { createSlice } from "@reduxjs/toolkit";

// // Crée un slice pour gérer l'état du message d'erreur
// const errorMessageSlice = createSlice({
//   name: "errorMessage",
//   initialState: "",
//   // Les reducers permettent de modifier l'état en fonction des actions
//   reducers: {
//     displayErrorMessage: (state, action) => {
//       return { ...state, ...action.payload }; // Affiche le message d'erreur
//     },
//     clearErrorMessage: (state) => {
//       return state = ""; // Efface le message d'erreur
//     },
//   },
// });

// // Exporte les actions
// export const { displayErrorMessage, clearErrorMessage } = errorMessageSlice.actions;

// // Exporte le reducer pour être utilisé dans le store Redux
// export default errorMessageSlice.reducer;
