import React from "react";

const BookListHeader = () => {
  return (
    <>
      <div className="row py-3 me-3">
        <div className="col-1">
          <strong>#</strong>
        </div>
        <div className="col-2">
          <strong>Title</strong>
        </div>
        <div className="col-2">
          <strong>ISBN</strong>
        </div>
        <div className="col-2">
          <strong>Author</strong>
        </div>
        <div className="col-2">
          <strong>Genre</strong>
        </div>
        <div className="col-3">
          <strong>Actions</strong>
        </div>
      </div>
    </>
  );
};

export default BookListHeader;
