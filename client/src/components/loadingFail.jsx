import React from "react";

const LoadingFail = ({ msg }) => {
  return (
    <>
      <div className="py-3 display-5">loading failed. </div>
      <p className="text-danger">ERROR: {msg}</p>
    </>
  );
};

export default LoadingFail;
