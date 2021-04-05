import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { logOut } from "../../actions/users";

const Header = () => {
  const token = localStorage.getItem("token");
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("log out");
    localStorage.removeItem("token");
    dispatch(logOut());
    history.push("/");
  };

  const menu = token ? (
    <>
      <li className="nav-item pe-3">
        <Link to="#" className="nav-link disabled">
          Welcome back, <strong>User!</strong>
        </Link>
      </li>
      <li className="nav-item pe-3">
        <button onClick={handleLogout} className="btn btn-outline-primary">
          Log Out
        </button>
      </li>
    </>
  ) : (
    <>
      <li className="nav-item pe-3">
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </li>
      <li className="nav-item pe-3">
        <Link to="/login" className="nav-link btn btn-outline-warning px-3">
          Log In
        </Link>
      </li>
    </>
  );
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
          <ul className="navbar-nav">{menu}</ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
