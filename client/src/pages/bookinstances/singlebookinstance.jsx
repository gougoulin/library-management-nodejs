import React from "react";
import { useParams } from "react-router";

const SingleBookInstanceList = () => {
  const { bookid } = useParams();
  return (
    <div>
      <h3 className="text-success">
        [SingleBookInstanceList.jsx] book (id: {bookid}) instance single page
      </h3>
    </div>
  );
};

export default SingleBookInstanceList;
