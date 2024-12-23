import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom'; 
import logo from '../assets/images/argentBankLogo.webp';
import {useDispatch, useSelector} from 'react-redux'
import { logOut } from '../Reducers/authSlice';


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    navigate('/');
  }

  const user = useSelector((state) => state.user);
  const isUserCurrentlyLoggedIn = user && user.isLoggedIn;

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
        {isUserCurrentlyLoggedIn ? (
          <>
            <NavLink to="/" className="main-nav-item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
            <NavLink to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user && user.user.userName}
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
