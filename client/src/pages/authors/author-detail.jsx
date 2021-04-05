import React, { useCallback, useEffect } from "react";
import { getAuthorDetailByID } from "../../actions/authors";
import MainLayout from "../../components/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const AuthorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(() => dispatch(getAuthorDetailByID(id)), [
    dispatch,
    id,
  ]);
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);
  const { first_name, last_name, date_of_birth, date_of_death } = useSelector(
    (state) => state.authors.currentAuthor
  );
  const main = (
    <div className="mt-3 mb-5 p-3">
      <h3 className="mb-3">Book ID: {id}</h3>
      <p className="py-1">
        <strong>First Name: </strong> {first_name || ""}
      </p>
      <p className="py-1">
        <strong>Last Name: </strong> {last_name || ""}
      </p>
      <p className="py-1">
        <strong>Date of Birth: </strong>
        <span className="w-100 text-break">
          {new Date(date_of_birth).getFullYear() || ""}
        </span>
      </p>
      <p className="py-1">
        <strong>Date of Death: </strong>
        <span className="w-100 text-break">
          {new Date(date_of_death).getFullYear() || ""}
        </span>
      </p>
      <Link className="mt-2 btn btn-primary" to={"/authors/" + id + "/edit"}>
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
