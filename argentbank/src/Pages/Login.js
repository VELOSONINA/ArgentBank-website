import React from 'react';
import LoginForm from '../Components/Forms/loginForm';
import Layout from '../Components/Layouts/layout';

const Login = () => {

  return (
    <Layout title="Argent Bank - Sign In page">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <div className="login-page">
            <h1>Sign In</h1>
            <LoginForm/> 
          </div> 
        </section>
      </main>
    </Layout>
  );
};

export default Login;
