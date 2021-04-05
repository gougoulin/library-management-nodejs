import React, { useCallback, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import { useDispatch } from "react-redux";

const Users = () => {
  //   const dispatch = useDispatch();

  //   const stableDispatch = useCallback(() => {
  //     dispatch(getGenres());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     stableDispatch();
  //   }, [stableDispatch]);

  const main = (
    <div className="container mt-3">
      <h3 className="mb-3">to be added later </h3>
    </div>
  );
  return (
    <>
      <MainLayout>{main}</MainLayout>
    </>
  );
};

export default Users;
