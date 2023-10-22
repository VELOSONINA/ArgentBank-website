import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Components/Title';

const Error = () => {
  return (
    <Title title="Argent Bank - Error page">
      <div className='error'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retour à la page d'accueil</Link>
      </div>
    </Title>
  );
};

export default Error;