import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBookInstance } from "../../actions/bookInstanceAction";

const BookListItem = ({ bookInstance, indx }) => {
  const { imprint, due_back, status, book, _id } = bookInstance;
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteBookInstance(_id));
  };
  console.log("list item", due_back);
  return (
    <>
      <div className="row py-3 me-3">
        {/* <div className="col-1">
      <strong>#</strong>
    </div> */}
        <div className="col-1">{++indx}</div>
        <div className="col-3">{book}</div>
        <div className="col-2">{imprint}</div>
        <div className="col-2">{status}</div>
        <div className="col-2">{new Date(due_back).toLocaleString()}</div>
        <div className="col-2">
          {/* <Link
            className="btn btn-outline-info btn-sm me-2"
            to={"/books/" + book + `/bookinstances/${_id}`}
          >
            View
          </Link> */}
          <Link
            className="btn btn-outline-warning btn-sm me-2"
            to={"/books/" + book + `/bookinstances/${_id}/edit`}
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-outline-danger btn-sm me-2 my-1"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BookListItem;
