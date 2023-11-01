import React from 'react';
import LoginForm from '../Components/Utils/Forms/LoginForm';
import GetTitle from '../Components/GetTitle';

const Login = () => {

  return (
    
      <main className="main bg-dark">
      <GetTitle title="Sign In page"/>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <div className="login-page">
            <h1>Sign In</h1>
            <LoginForm/> 
          </div> 
        </section>
      </main>
  );
};

export default Login;
