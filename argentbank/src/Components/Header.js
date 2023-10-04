import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/argentBankLogo.png';

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <ul>
        <li>
            <NavLink to='/login'>Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
