import React, { useCallback, useEffect, useState } from "react";
import { getBookDetailByID } from "../../actions/books";
import MainLayout from "../../components/mainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.books.currentBook);

  // avoid useEffect dependency warning
  const stableDispatch = useCallback(() => dispatch(getBookDetailByID(id)), [
    dispatch,
    id,
  ]);

  // set up currentBook in redux store state
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);

  // local state
  const initLocalState = { title: "", isbn: "", summary: "" };
  const [state, setState] = useState(initLocalState);
  // get the placeholder values
  const { title, isbn, summary } = currentBook;

  // event handlers
  const handleClearInput = (e) => {
    e.preventDefault();
    setState(initLocalState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e, key) => {
    let newState = { ...state };
    newState[key] = e.target.value;
    setState(newState);
  };
  const main = (
    <form className="mt-3 mb-5 p-3 form">
      <h3>Book ID: {id}</h3>
      <div>
        <p className="py-1">
          <strong>Title: </strong> {title || ""}
        </p>
        <input
          onChange={(e) => {
            handleInput(e, "title");
          }}
          className="form-control"
          type="text"
          placeholder={currentBook.title}
          value={state.title}
        />
      </div>
      <div>
        <p className="py-1">
          <strong>isbn: </strong> {isbn || ""}
        </p>
        <input
          onChange={(e) => {
            handleInput(e, "isbn");
          }}
          className="form-control"
          type="text"
          placeholder={currentBook.isbn}
          value={state.isbn}
        />
      </div>
      <div className="py-1">
        <strong>Summary: </strong>
        <div className="w-100 text-break">{summary || ""}</div>
        <textarea
          onChange={(e) => {
            handleInput(e, "summary");
          }}
          placeholder={currentBook.summary}
          value={state.summary}
          className="form-control"
          rows="6"
        ></textarea>
      </div>
      <button onClick={handleClearInput} className="mt-3 btn btn-primary">
        Clear
      </button>
      <button onClick={handleSubmit} className="mt-3 btn btn-primary ms-3">
        Save
      </button>
    </form>
  );
  return (
    <>
      <MainLayout main={main} />
    </>
  );
};

export default BookDetail;
