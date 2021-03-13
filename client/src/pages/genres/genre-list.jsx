import React from "react";
import { useSelector } from "react-redux";
import GenreListItem from "./genre-list-item";

const AuthorList = () => {
  const genres = useSelector((state) => state.genres.genreList);
  console.log("genres", genres);
  if (genres === undefined) {
    return <h2>Loading ...</h2>;
  } else if (genres.length === 0) {
    return (
      <h2 className="py-3">Sorry, zero genre existing. Tyr add one now.</h2>
    );
  }
  const genreList = genres.map((genre, indx) => (
    <GenreListItem key={genre._id} indx={++indx} genre={genre} />
  ));
  return <div>{genreList}</div>;
};

export default AuthorList;
