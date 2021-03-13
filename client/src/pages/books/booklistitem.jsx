import React from "react";
import { Link, useHistory } from "react-router-dom";

const BookListItem = ({ book, indx }) => {
  const history = useHistory();
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/books/" + book._id;
    const res = await fetch(url, {
      method: "DELETE",
    });
    switch (res.status) {
      case 200:
        console.info("Book deleted.");
        history.push("/");
        break;
      case 404:
        console.info(`Error: book ${book._id} not exist.`);
        break;
      case 500:
        console.info("Error: server internal error.");
        break;
      default:
        break;
    }
  };

  return (
    <div key={book._id} className="mb-2 me-3 row border-bottom py-3">
      <div className="col-1">{indx}</div>
      <div className="col-2">{book.title}</div>
      <div className="col-2">{book.isbn}</div>
      <div className="col-2">
        {book.author.first_name + ", " + book.author.last_name}
      </div>
      <div className="col-2">{book.genre.name}</div>
      <div className="col-3">
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
      </div>
    </div>
  );
};

export default BookListItem;
