import React, { useCallback, useEffect } from "react";
import { getBookDetailByID } from "../../actions/books";
import MainLayout from "../../components/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(() => dispatch(getBookDetailByID(id)), [
    dispatch,
    id,
  ]);
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);
  const currentBook = useSelector((state) => state.books.currentBook);
  const { title, isbn, summary } = currentBook;
  const main = (
    <div className="mt-3 mb-5 p-3">
      <h3>Book ID: {id}</h3>
      <p className="py-1">
        <strong>Title: </strong> {title || ""}
      </p>
      <p className="py-1">
        <strong>isbn: </strong> {isbn || ""}
      </p>
      <div className="py-1">
        <strong>Summary: </strong>
        <div className="w-100 text-break">{summary || ""}</div>
      </div>
      <Link
        className="mt-3 btn btn-primary btn-lg"
        to={"/books/" + currentBook._id + "/edit"}
      >
        Edit
      </Link>
    </div>
  );
  return (
    <>
      <MainLayout>{main}</MainLayout>
    </>
  );
};

export default BookDetail;
