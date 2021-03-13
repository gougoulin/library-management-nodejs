import React, { useCallback, useEffect, useState } from "react";
import { getGenreDetailByID } from "../../actions/genres";
import MainLayout from "../../components/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../../api";

const GenreDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(() => dispatch(getGenreDetailByID(id)), [
    dispatch,
    id,
  ]);
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);
  const current = useSelector((state) => state.genres.currentGenre);

  // set up local state
  const initialInputs = {
    name: "",
    err: "",
    msg: "",
  };
  const [inputs, setInputs] = useState(initialInputs);
  // handle form field input
  const handleInput = (e, key) => {
    const stateCopy = { ...inputs };
    stateCopy[key] = e.target.value;
    setInputs(stateCopy);
  };
  // after submit click
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await api.putGenre({ name: inputs.name, id: current._id });
    console.log("after putGenre", resp);
    switch (resp.status) {
      case 200:
        setInputs({ ...inputs, msg: "Update genre success." });
        // history.push("/genres");
        break;
      default:
        setInputs({ ...inputs, msg: "", err: "" });
        break;
    }
  };

  const main = (
    <div className="mt-3 mb-5 p-3">
      <h3 className="mb-3">Book ID: {id}</h3>
      <div className="bg-info">{inputs.err}</div>
      <div className="bg-warning">{inputs.msg}</div>
      <p className="py-1">
        <strong>Genre Type: </strong> {current.name || ""}
      </p>
      <input
        onInput={(e) => handleInput(e, "name")}
        className="form-control w-75 my-2"
        id="genre"
        name="genre"
        type="text"
        value={inputs.name}
        placeholder={current.name}
      />
      <button onClick={handleSubmit} className="mt-2 btn btn-primary">
        Update
      </button>
    </div>
  );
  return (
    <>
      <MainLayout main={main} />
    </>
  );
};

export default GenreDetail;
