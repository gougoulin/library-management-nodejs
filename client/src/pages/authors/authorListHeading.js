import React from "react";

const AuthorListHeading = () => {
  return (
    <div className="py-3 border-bottom row">
      <div className="col-1 text-bold">#</div>
      <div className="col-2 text-bold">Full Name</div>
      <div className="col-2 text-bold">Life Span</div>
      <div className="col-2 text-bold">Actions</div>
    </div>
  );
};

export default AuthorListHeading;
