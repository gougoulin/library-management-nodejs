import React, { useCallback, useEffect, useState } from "react";
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
  // set up local state
  const initialInputs = {
    fName: { value: "", error: "" },
    lName: { value: "", error: "" },
    dob: { value: "", error: "" },
    dod: { value: "", error: "" },
  };
  const [inputs, setInputs] = useState(initialInputs);
  // execute upon loaded
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);
  const { first_name, last_name, date_of_birth, date_of_death } = useSelector(
    (state) => state.authors.currentAuthor
  );
  // handle form field input
  const handleInput = (e, key) => {
    const stateCopy = { ...inputs };
    stateCopy[key] = e.target.value;
    setInputs(stateCopy);
  };

  const main = (
    <form className="mt-3 mb-5 p-3">
      <legend className="mb-3">Editing Book ID: {id}</legend>
      <p className="py-1">
        <strong>First Name: </strong> {first_name || ""}
      </p>
      <input
        onInput={(e) => handleInput(e, "fName")}
        className="form-control w-75 my-2"
        id="author-fname"
        name="author-fname"
        type="text"
        placeholder={first_name}
      />
      <p className="text-danger">{inputs.fName.error}</p>
      <p className="py-1">
        <strong>Last Name: </strong> {last_name || ""}
      </p>
      <input
        onInput={(e) => handleInput(e, "lName")}
        className="form-control w-75 my-2"
        id="author-lname"
        name="author-lname"
        type="text"
        placeholder={last_name}
      />
      <p className="text-danger">{inputs.lName.error}</p>
      <p className="py-1">
        <strong>Date of Birth: </strong>
        <span className="w-100 text-break">
          {new Date(date_of_birth).toUTCString().slice(4, 16) || ""}
        </span>
      </p>
      <input
        onInput={(e) => handleInput(e, "dob")}
        className="form-control w-75 my-2"
        id="author-dob"
        name="author-dob"
        type="date"
      />
      <p className="text-danger">{inputs.dob.error}</p>
      <p className="py-1">
        <strong>Date of Death: </strong>
        <span className="w-100 text-break">
          {new Date(date_of_death).toUTCString().slice(4, 16) || ""}
        </span>
      </p>
      <input
        onInput={(e) => handleInput(e, "dod")}
        className="form-control w-75 my-2"
        id="author-dod"
        name="author-dod"
        type="date"
      />
      <p className="text-danger">{inputs.dod.error}</p>
      <button className="mt-2 btn btn-primary" s>
        Update
      </button>
    </form>
  );
  return (
    <>
      <MainLayout>{main}</MainLayout>
    </>
  );
};

export default AuthorDetail;
