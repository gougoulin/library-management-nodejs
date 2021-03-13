import React, { useCallback, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import { useDispatch } from "react-redux";
import { getAuthors } from "../../actions/authors";
import AuthorList from "./authorList";
import AuthorListHeading from "./authorListHeading";

const Authors = () => {
  const dispatch = useDispatch();

  const stableDispatch = useCallback(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);

  const main = (
    <div className="container mt-3">
      <h3 className="mb-3">Authors </h3>
      <AuthorListHeading />
      <AuthorList />
    </div>
  );
  return (
    <>
      <MainLayout main={main} />
    </>
  );
};

export default Authors;
