import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import MainLayout from "../../components/mainLayout";
import { createBookInstance } from "../../actions/bookInstanceAction";

const CreateBookInstance = ({}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { bookid } = useParams();
  const [state, setState] = useState({
    imprint: "",
    status: "Maintenance",
    due: new Date().now,
    errors: {
      imprint: "",
      due: "",
    },
  });

  /**
   * react to the input event
   * @param {*} e
   * @param {*} key
   */
  const handleInput = (e, key) => {
    const newState = { ...state };
    newState[key] = e.target.value;
    setState(newState);
    console.log(state);
  };

  const handleSubmit = () => {
    console.log("submit form");
    const data = {
      bookid,
      status: state.status,
      imprint: state.imprint,
      due: state.due,
    };
    console.log(data);
    dispatch(createBookInstance(data));
    history.push("/bookinstances");
  };

  return (
    <MainLayout>
      <div>
        <h3 className="text-secondary py-3 mb-3">Create Book Copies</h3>
        <form action="">
          {/* book id */}
          <div className="mb-3">
            <label for="book-title">Book ID</label>
            <input
              className="form-control w-100 my-2"
              disabled
              id="book-id"
              name="book-id"
              type="text"
              value={bookid}
            />
          </div>

          {/* imprint  */}
          <div className="mb-3">
            <label for="imprint">Imprint</label>
            <input
              className="form-control w-100 my-2"
              id="imprint"
              name="imprint"
              type="text"
              value={state.imprint}
              onChange={(e) => {
                handleInput(e, "imprint");
              }}
            />
            <div id="imprint-error" className="col error-message text-danger">
              {state.errors.imprint}
            </div>
          </div>

          {/* status  */}
          <div className="mb-3">
            <label for="status">Status</label>
            <select
              className="form-select"
              name="status"
              id="status"
              value={state.status}
              onChange={(e) => {
                handleInput(e, "status");
              }}
            >
              <option value="Available">Available</option>
              <option selected value="Maintenance">
                Maintenance
              </option>
              <option value="Reserved">Reserved</option>
              <option value="Loaned">Loaned</option>
            </select>
          </div>

          {/* due back  */}
          <div className="mb-3">
            <label for="due">Due Back {state.due}</label>
            <input
              className="form-control w-100 my-2"
              id="due"
              name="due"
              type="date"
              value={state.due}
              onChange={(e) => {
                handleInput(e, "due");
              }}
            />
            <div id="due-error" className="col error-message text-danger">
              {state.errors.due}
            </div>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary mt-3 mb-5">
            Save Book Copy
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default CreateBookInstance;
