import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../assets/images/argentBankLogo.png';

function Header() {
  

  // Définir isConnected en tant que fonction
  const isConnected = () => {
    const isLoggedIn = localStorage.getItem('IsLoggedIn') === 'true';
    return isLoggedIn; 
  };

  // Fonction pour gérer la déconnexion
  const handleSignOut = (e) => {
    e.preventDefault();
    
    localStorage.removeItem('IsLoggedIn', 'true');
    localStorage.removeItem('token');
  };

  return (
    <nav className="main-nav">
      <NavLink to="/">
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </NavLink>
      <div>
        {isConnected() === true ? null : (
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {isConnected() === false ? null : (
          <>
            <NavLink
              to="/"
              className="main-nav-item"
              onClick={handleSignOut}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
            <NavLink to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
            
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
