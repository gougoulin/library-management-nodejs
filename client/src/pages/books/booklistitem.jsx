import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../../actions/books";

const BookListItem = ({ book, indx }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    dispatch(deleteBook(book._id));
  };

  const fname = book.author.first_name || "";
  const lname = book.author.last_name ? `, ${book.author.last_name}` : "";
  const authorName = fname + lname;
  return (
    <div key={book._id} className="mb-2 me-3 row border-bottom py-3">
      {/* <div className="col-1">{indx}</div> */}
      <div className="col-2">{book.title}</div>
      <div className="col-2">{book.isbn}</div>
      <div className="col-2">{authorName}</div>
      <div className="col-2">{book.genre.name}</div>
      <div className="col-4">
        <Link
          className="btn btn-outline-info btn-sm me-2"
          to={"/books/" + book._id}
        >
          View
        </Link>
        <Link
          className="btn btn-outline-warning btn-sm me-2"
          to={"/books/" + book._id + "/edit"}
        >
          Edit
        </Link>
        <Link
          className="btn btn-outline-danger btn-sm me-2"
          onClick={handleDeleteClick}
        >
          Delete
        </Link>

        <Link
          to={`/books/${book._id}/bookinstances/create`}
          className="btn btn-outline-primary btn-sm me-2 my-1"
        >
          New Copy
        </Link>
      </div>
    </div>
  );
};

export default BookListItem;
