import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/users">
            All users
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/books">
            All books
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/authors">
            All authors
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/genres">
            Al genres
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bookinstances">
            All book instances
          </Link>
        </li>
      </ul>
      <ul className="nav flex-column mt-3">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/users/create">
            Create New User
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/books/create"
          >
            Create New Book
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/authors/create">
            Create New Author
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/genres/create">
            Create New Genre
          </Link>
        </li>
        {/* move to book list item - actions  */}
        {/* <li className="nav-item">
          <Link className="nav-link" to="/bookinstances/create">
            Create new Book Instance
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default Sidebar;
