import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import LoadingFail from "../../components/loadingFail";
import GenreListItem from "./genre-list-item";

const AuthorList = () => {
  const genres = useSelector((state) => state.genres);

  console.log(genres.loading);
  let genreList = null;
  switch (genres.loading) {
    case "start":
      genreList = <Loading />;
      break;
    case "success":
      if (genres.genreList.length === 0) {
        genreList = (
          <h2 className="text-info py-3">No genres in the library.</h2>
        );
      } else {
        genreList = genres.genreList.map((genre, indx) => (
          <GenreListItem key={genre._id} indx={++indx} genre={genre} />
        ));
      }
      break;
    case "fail":
      genreList = <LoadingFail />;
      break;
    default:
      genreList = <h2 className="text-danger">Unexpected errors occurs.</h2>;
      break;
  }

  return <div>{genreList}</div>;
};

export default AuthorList;
