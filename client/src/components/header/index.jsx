import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const isLogin = useSelector((state) => state.users.token);
  isLogin ? 
  return (
    <>
      <header id="header" className="bg-dark text-white text-center py-1">
        header Messages
      </header>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Local Library
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item pe-3">
              <Link to="#" className="nav-link disabled">
                Welcome back, <strong>User!</strong>
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link to="#" className="nav-link">
                Log Out
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item pe-3">
              <Link
                to="/login"
                className="nav-link btn btn-outline-warning px-3"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
