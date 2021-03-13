import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="nav flex-column mt-5">
        <li className="nav-item">
          <Link className="nav-link" to="/books">
            Books
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/authors">
            Authors
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/genres">
            Genres
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link disabled"
            to="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </Link>
        </li>
      </ul>
      <ul className="nav flex-column mt-5">
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
          <Link className="nav-link" to="/bookinstances/create">
            Create Book Instance
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
        <li className="nav-item">
          <Link className="nav-link" to="/users/create">
            Create New User
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
