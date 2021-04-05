import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainLayout from "../../components/mainLayout";

const CreateBook = () => {
  const history = useHistory();
  // local state
  const initialState = {
    title: "",
    summary: "",
    isbn: "",
    genre: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    date_of_death: "",
  };
  const [state, setState] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title: state.title,
      summary: state.summary,
      isbn: state.isbn,
    };
    try {
      // convert genre to Genre ObjectID
      let res = await fetch(`http://localhost:5000/api/genres/${state.genre}`, {
        method: "GET",
      });
      if (res.status === 200) {
        console.log("createBook.jsx", "genre is allowed ID");
        data.genre = state.genre;
      } else if (res.status === 404 || res.status === 500) {
        console.log("got status code 404 / 500");
        const innerResp = await fetch(`http://localhost:5000/api/genres`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: state.genre }),
        });
        if (innerResp.status === 201 || innerResp.status === 209) {
          const genreData = await innerResp.json();
          console.log("[createBook.jsx] genreData", genreData);
          data.genre = genreData.id;
        }
      } else {
        data.genre = null;
        throw Error("Error in fetch genre objectID");
      }
      console.log("data after fetch genre", data);

      // convert author info to Mongoose Author ObjectID
      const uri = "http://localhost:5000/api/authors";
      const authorResp = await fetch(uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: state.first_name,
          last_name: state.last_name,
          date_of_birth: state.date_of_birth,
          date_of_death: state.date_of_death,
        }),
      });
      if (authorResp.status === 201 || authorResp.status === 409) {
        const authorData = await authorResp.json();
        data.author = authorData.id;
        console.log("covert author to author ID", data);
      } else {
        throw Error("Error in fetch author objectID");
      }
      // finally create new book
      console.log("about to post data", data);
      const bookResp = await fetch(`http://localhost:5000/api/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (bookResp.status === 201) {
        console.log("book created.");
        history.push("/books");
      } else {
        throw Error("Error in POST & CREATE new book");
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
        This is the <span className="text-danger">Create New Users Page</span>
      </h3>
      <form className="mt-5 w-50 mx-auto" id="form-create-book-post">
        <div className="mb-3">
          <label for="book-title">Title</label>
          <input
            onInput={(e) => handleInput(e, "title")}
            className="form-control w-100 my-2"
            id="book-title"
            name="book-title"
            type="text"
          />
          {/* <div id="book-title-error" className="col error-message text-danger">
            error message
          </div> */}
        </div>

        <div className="mb-3">
          <label for="book-summary">Summary</label>
          <textarea
            onInput={(e) => handleInput(e, "summary")}
            className="form-control w-100 my-2"
            id="book-summary"
            name="book-summary"
            type="textarea"
          ></textarea>
          {/* <div
            id="book-summary-error"
            className="col error-message text-danger"
          >
            error message
          </div> */}
        </div>
        <div className="mb-3">
          <label for="book-isbn">ISBN</label>
          <input
            onInput={(e) => handleInput(e, "isbn")}
            className="form-control w-100 my-2"
            id="book-isbn"
            name="book-isbn"
            type="text"
          />
          {/* <div id="book-isbn-error" className="col error-message text-danger">
            error message
          </div> */}
        </div>
        <div className="mb-3">
          <label for="book-genre">Genre</label>
          <input
            onInput={(e) => handleInput(e, "genre")}
            className="form-control w-100 my-2"
            id="book-genre"
            name="book-genre"
            type="text"
          />
          {/* <div className="col error-message text-danger">error message</div> */}
        </div>
        <div className="mb-3">
          <label for="author-fname">First Name of Author</label>
          <input
            onInput={(e) => handleInput(e, "first_name")}
            className="form-control w-100 my-2"
            id="author-fname"
            name="author-fname"
            type="text"
          />
          {/* <div
            id="author-fname-error"
            className="col error-message text-danger"
          >
            error message
          </div> */}
        </div>
        <div className="mb-3">
          <label for="author-lname">Last Name of Author</label>
          <input
            onInput={(e) => handleInput(e, "last_name")}
            className="form-control w-100 my-2"
            id="author-lname"
            name="author-lname"
            type="text"
          />
          {/* <div
            id="author-lname-error"
            className="col error-message text-danger"
          >
            error message
          </div> */}
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
          {/* <div id="author-dob-error" className="col error-message text-danger">
            error message
          </div> */}
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
          {/* <div
            id="author-lname-error"
            className="col error-message text-danger"
          >
            error message
          </div> */}
        </div>
        <button onClick={handleSubmit} className="btn btn-primary mt-3 mb-5">
          Save New Book
        </button>
      </form>
    </>
  );
  return (
    <>
      <MainLayout>{main}</MainLayout>
    </>
  );
};

export default CreateBook;
