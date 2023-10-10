import React, { useState } from 'react';
import { loginUser } from '../../api/loginApi';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      setEmail('');
      setPassword('');
      navigate('/user');
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
      <button
            className="sign-in-button"
            type="submit"
      >
            Sign In
      </button>
    </form>
  );
};

export default LoginForm;
