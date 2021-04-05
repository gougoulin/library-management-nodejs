import React from "react";

const BookInstanceListHeader = () => {
  return (
    <>
      <div className="row py-3 me-3">
        {/* <div className="col-1">
          <strong>#</strong>
        </div> */}
        <div className="col-1">
          <strong>#</strong>
        </div>
        <div className="col-3">
          <strong>Book ID</strong>
        </div>
        <div className="col-2">
          <strong>Imprint</strong>
        </div>
        <div className="col-2">
          <strong>Status</strong>
        </div>
        <div className="col-2">
          <strong>Due Back</strong>
        </div>
        <div className="col-2">
          <strong>Actions</strong>
        </div>
      </div>
    </>
  );
};

export default BookInstanceListHeader;
