import React from 'react';

function Login() {
  return (
    <div className="login-page">
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;