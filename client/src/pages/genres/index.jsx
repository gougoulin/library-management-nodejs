import React, { useCallback, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import { useDispatch } from "react-redux";
import { getGenres } from "../../actions/genres";
import GenreList from "./genre-list";
import GenreListHeading from "./genre-list-heading";

const Genres = () => {
  const dispatch = useDispatch();

  const stableDispatch = useCallback(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);

  const main = (
    <div className="container mt-3">
      <h3 className="mb-3">Authors </h3>
      <GenreListHeading />
      <GenreList />
    </div>
  );
  return (
    <>
      <MainLayout>{main}</MainLayout>
    </>
  );
};

export default Genres;
