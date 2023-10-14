import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layouts/layout';

const Error = () => {
  return (
    <Layout title="Argent Bank - Error page">
      <div className='error404'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retour à la page d'accueil</Link>
      </div>
    </Layout>
  );
};

export default Error;