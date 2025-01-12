import React, { useState, useEffect} from 'react';
import { authenticateUser  } from '../../../Api/Authentication';
import { useNavigate } from 'react-router-dom';
import Button from '../../Layouts/Button'
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);


  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(authenticateUser ({ email,
        password, }));

      if (authenticateUser.fulfilled.match(result)) {
        setError(null); 
        //redirige l'utilisateur vers la page accueil après connexion réussie
        navigate('/user');
      } else if (authenticateUser.rejected.match(result)) {
        setError(result.payload);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setPassword('');
        setError(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

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
            className={`sign-in-button ${error ? '' : 'success'}`}
            type="submit"
      >
            {loading ? "Loading..." : "Sign In"}
      </Button>
      {error && <p className='error-message'>{error}</p>}
    </form>
  );
};

export default LoginForm;
