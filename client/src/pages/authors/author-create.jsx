import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainLayout from "../../components/mainLayout";

const CreateAuthor = () => {
  const history = useHistory();
  // local state
  const initialState = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    date_of_death: "",
    errors: {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      date_of_death: "",
      general: "",
    },
    info: "",
  };
  const [state, setState] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, date_of_birth, date_of_death } = state;
    let data = {
      first_name,
      last_name,
      date_of_birth: new Date(date_of_birth),
      date_of_death: new Date(date_of_death),
    };
    try {
      // save author to server
      const uri = "http://localhost:5000/api/authors";
      const authorResp = await fetch(uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (authorResp.status === 201) {
        setState({ ...state, info: "Author created." });
        data.author = authorResp.json().id;
      } else if (authorResp.status === 409) {
        const modifyErrors = {
          ...state.errors,
          general: "Duplicate data. Author already exists.",
        };
        setState({ ...state, errors: modifyErrors });
      } else {
        setState({ ...state, info: "Server internal error." });
        throw Error("Error in create new author.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = (e, key) => {
    const stateCopy = { ...state };
    stateCopy[key] = e.target.value;
    setState(stateCopy);
  };

  const main = (
    <>
      <h3 className="text-center mt-3 mb-3">
        <span className="text-danger">Create New Author</span>
      </h3>
      <div className="bg-warning text-center text-danger">
        {state.errors.general}
      </div>
      <div className="bg-warning text-center text-danger">{state.info}</div>
      <form className="mt-5 w-50 mx-auto" id="form-create-book-post">
        <div className="mb-3">
          <label for="author-fname">First Name</label>
          <input
            onInput={(e) => handleInput(e, "first_name")}
            className="form-control w-100 my-2"
            id="author-fname"
            name="author-fname"
            type="text"
          />
          <div
            id="author-fname-error"
            className="col error-message text-danger"
          >
            {state.errors.first_name}
          </div>
        </div>
        <div className="mb-3">
          <label for="author-lname">Last Name</label>
          <input
            onInput={(e) => handleInput(e, "last_name")}
            className="form-control w-100 my-2"
            id="author-lname"
            name="author-lname"
            type="text"
          />
          <div
            id="author-lname-error"
            className="col error-message text-danger"
          >
            {state.errors.last_name}
          </div>
        </div>
        <div className="mb-3">
          <label for="author-lname">Date of birth</label>
          <input
            onInput={(e) => handleInput(e, "date_of_birth")}
            className="form-control w-100 my-2"
            id="author-dob"
            name="author-dob"
            type="date"
          />
          <div id="author-dob-error" className="col error-message text-danger">
            {state.errors.date_of_birth}
          </div>
        </div>
        <div className="mb-3">
          <label for="author-dod">Date of death</label>
          <input
            onInput={(e) => handleInput(e, "date_of_death")}
            className="form-control w-100 my-2"
            id="author-dod"
            name="author-dod"
            type="date"
          />
          <div
            id="author-lname-error"
            className="col error-message text-danger"
          >
            {state.errors.date_of_death}
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary mt-3 mb-5">
          Save Author
        </button>
      </form>
    </>
  );
  return (
    <>
      <MainLayout main={main} />
    </>
  );
};

export default CreateAuthor;
