import axios from 'axios';

const urlUserLogin = 'http://localhost:3001/api/v1/user/login';

export const loginUser = async ({ username, password }) => {
    try {
      
      const response = await axios.post(urlUserLogin, {
        username,
        password,
      });

      if (response.status !== 200) {
        throw new Error('Échec de la connexion.');
      }

      const data = response.data;

      //stocker le token dans localstorage
      localStorage.setItem('token', data.token);

      return data.token; 
    } catch (error) {
      throw new Error(`Erreur lors de la connexion:${error.message}`);
  }
}
