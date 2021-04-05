import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import LoadingFail from "../../components/loadingFail";
import BookListHeader from "./booklistheader";
import BookListItem from "./booklistitem";

const BookList = () => {
  const books = useSelector((state) => state.books);

  console.log(books.loading);
  let bookList = null;
  switch (books.loading) {
    case "start":
      bookList = <Loading />;
      break;
    case "success":
      if (books.bookList.length === 0) {
        bookList = <h2 className="text-info py-3">No books in the library.</h2>;
      } else {
        bookList = books.bookList.map((book, indx) => {
          return <BookListItem key={book._id} indx={indx} book={book} />;
        });
      }
      break;
    case "fail":
      bookList = <LoadingFail />;
      break;
    default:
      bookList = <h2 className="text-danger">Unexpected errors occurs.</h2>;
      break;
  }

  return (
    <div className="mt-5 py-3">
      <BookListHeader />
      {bookList}
    </div>
  );
};

export default BookList;
