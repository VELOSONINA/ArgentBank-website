import React, { useState } from 'react';
import { authenticateUser  } from '../../../Api/Authentication';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button'
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);


  const handleSubmitLogin = async (e) => {
    e.preventDefault();
  

    try {
      const result = await dispatch(authenticateUser ({ email,
        password, }));

      if (result.meta.requestStatus === "fulfilled") {
        
        //réinitialisation des champs de formulaire
        setEmail('');
        setPassword('');

        //redirige l'utilisateur vers la page accueil après connexion réussie
        navigate('/user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input 
          type="checkbox" 
          id="remember-me"
          onChange={() => setRememberMe(!rememberMe)} 
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button
            className="sign-in-button"
            type="submit"
      >
            {loading ? "Loading..." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
