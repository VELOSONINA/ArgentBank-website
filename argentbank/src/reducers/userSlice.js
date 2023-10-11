import { createSlice } from '@reduxjs/toolkit';
import { editUserNameAsync } from '../actions/userAction';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    error: null, 
    loading: false
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(editUserNameAsync.pending, (state) => {
            state.loading = true;
            state.error = null; 
        })
        .addCase(editUserNameAsync.fulfilled, (state, action) => {
            state.userName = action.payload;
            state.loading = false; 
            state.error = null;

        })
        .addCase(editUserNameAsync.rejected, (state, action) => {
            state.error = action.error.message; // Enregistrez l'erreur dans votre état pour la gestion d'erreur.
            state.loading = false;
      });
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
