import React from "react";
import { Link, useHistory } from "react-router-dom";

const AuthorListItem = ({ author, indx }) => {
  const history = useHistory();

  const { name, lifespan, url, id } = author;
  // send delete request
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/authors/${id}`, {
        method: "DELETE",
      });
      if (res.ok && res.status === 200) {
        history.push("/");
      } else if (res.status === 409) {
        throw Error("Can't delete. Delete author's books first.");
      }
    } catch (error) {
      console.log(error.message);
    }
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
