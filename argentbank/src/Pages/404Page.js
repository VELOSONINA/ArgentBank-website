import React from 'react';
import { Link } from 'react-router-dom';
import GetTitle from '../Components/Layouts/GetTitle';


const Error = () => {

  return (
      <div className='error'>
        <GetTitle title="Error page"/>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retour à la page d'accueil</Link>
      </div>
  );
};

export default Error;