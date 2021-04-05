import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteAuthor } from "../../actions/authors";

const AuthorListItem = ({ author, indx }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { lifespan, url, id } = author;
  const name = author.name;
  // send delete request
  const handleDelete = async () => {
    dispatch(deleteAuthor(id));
  };
  return (
    <div className="py-3 border-bottom row align-items-center">
      <div className="col-1">{indx}</div>
      <div className="col-2">{name}</div>
      <div className="col-2">{lifespan}</div>
      <div className="col-3">
        <Link
          to={`/authors/${id}`}
          className="btn me-2 btn-sm btn-outline-info"
        >
          View
        </Link>
        <Link
          to={`/authors/${id}/edit`}
          className="btn me-2 btn-sm btn-outline-warning"
        >
          Edit
        </Link>
        <Link
          onClick={handleDelete}
          className="btn me-2 btn-sm btn-outline-danger"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default AuthorListItem;
