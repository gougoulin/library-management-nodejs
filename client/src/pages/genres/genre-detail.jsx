import React, { useCallback, useEffect } from "react";
import { getGenreDetailByID } from "../../actions/genres";
import MainLayout from "../../components/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const AuthorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(() => dispatch(getGenreDetailByID(id)), [
    dispatch,
    id,
  ]);
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);
  const { name } = useSelector((state) => state.genres.currentGenre);
  const main = (
    <div className="mt-3 mb-5 p-3">
      <h3 className="mb-3">Book ID: {id}</h3>
      <p className="py-1">
        <strong>Genre Name: </strong> {name || ""}
      </p>
      <Link className="mt-2 btn btn-primary" to={"/genres/" + id + "/edit"}>
        Edit
      </Link>
    </div>
  );
  return (
    <>
      <MainLayout>{main}</MainLayout>
    </>
  );
};

export default AuthorDetail;
