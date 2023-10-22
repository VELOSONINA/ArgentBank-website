import React from 'react';
import LoginForm from '../Components/Utils/Forms/LoginForm';
import Title from '../Components/Title'

const Login = () => {

  return (
    <Title title="Argent Bank - Sign In page">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <div className="login-page">
            <h1>Sign In</h1>
            <LoginForm/> 
          </div> 
        </section>
      </main>
    </Title>
  );
};

export default Login;
