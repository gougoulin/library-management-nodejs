import React from "react";
import { useParams } from "react-router";

const BookInstance = () => {
  const { bookid } = useParams();
  return (
    <div>
      <h3 className="text-success">book (id: {bookid}) instance single page</h3>
    </div>
  );
};

export default BookInstance;
