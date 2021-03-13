import React from "react";
import { useSelector } from "react-redux";
import BookListHeader from "./booklistheader";
import BookListItem from "./booklistitem";

const BookList = () => {
  const books = useSelector((state) => state.books.bookList);
  const bookList = books.map((book, indx) => {
    return <BookListItem key={book._id} indx={indx} book={book} />;
  });
  return (
    <div className="mt-5 py-3">
      <BookListHeader />
      {bookList}
    </div>
  );
};

export default BookList;
