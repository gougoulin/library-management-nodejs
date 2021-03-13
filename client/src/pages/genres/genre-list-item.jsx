import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteGenres } from "../../api";
import { getGenres } from "../../actions/genres";
import { useDispatch } from "react-redux";

const GenreListItem = ({ genre, indx }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = genre;
  //   send delete request
  const handleDelete = async () => {
    try {
      //   const res = await fetch(`http://localhost:5000/api/authors/${id}`, {
      //     method: "DELETE",
      //   });
      //   if (res.ok && res.status === 200) {
      //     history.push("/");
      //   } else if (res.status === 409) {
      //     throw Error("Author doesn't exists.");
      //   }
      const res = await deleteGenres(genre._id);
      switch (res.status) {
        case 200:
          console.log("Genre deleted.");
          dispatch(getGenres());
          history.push("/genres");
          break;
        case 404:
          console.log("Genre not exists");
          break;
        case 500:
          console.log("Server internal error;");
          break;
        default:
          throw Error("Failed to delete.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-3 border-bottom row align-items-center">
      <div className="col-1">{indx}</div>
      <div className="col-2">{name}</div>
      <div className="col-3">
        <Link
          to={`/genres/${genre._id}`}
          className="btn me-2 btn-sm btn-outline-info"
        >
          View
        </Link>
        <Link
          to={`/genres/${genre._id}/edit`}
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

export default GenreListItem;
