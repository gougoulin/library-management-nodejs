import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainLayout from "../../components/mainLayout";
import { postGenres } from "../../api/index";

const CreateGenre = () => {
  const history = useHistory();
  // local state
  const initialState = {
    name: "",
    errors: {
      name: "",
    },
    info: "",
  };
  const [state, setState] = useState(initialState);
  console.log("[genre-create] running once", state);

  // event handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await postGenres({ name: state.name });
    console.log("response received.", resp.status);
    switch (resp.status) {
      case 201:
        console.log("response", resp);
        setState({ ...state, info: `Genre ${state.name} created.` });
        break;
      case 209:
        setState({ ...state, errors: { name: "Genre already exists." } });
        break;
      default:
        break;
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
        <span className="text-danger">Create New Genre</span>
      </h3>
      <div className="bg-warning text-center text-danger">
        {state.errors.general}
      </div>
      <div className="bg-warning text-center text-danger">{state.info}</div>
      <form className="mt-5 w-50 mx-auto" id="form-create-book-post">
        <div className="mb-3">
          <label for="genre-name">Genre Name</label>
          <input
            onInput={(e) => handleInput(e, "name")}
            className="form-control w-100 my-2"
            id="genre-name"
            name="genre-name"
            type="text"
          />
          <div id="genre-name-error" className="col error-message text-danger">
            {state.errors.name}
          </div>
        </div>

        <button onClick={handleSubmit} className="btn btn-primary mt-3 mb-5">
          Save Genre
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

export default CreateGenre;
