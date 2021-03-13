import React from "react";
import MainLayout from "../components/mainLayout";
import { Link } from "react-router-dom";

const Home = () => {
  const main = (
    <div className="p-3">
      <h2 className="mb-3 py-3">Dashboard Page</h2>
      <div className="d-flex justify-content-evenly">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">BOOKs</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/books" className="btn btn-outline-primary">
              View Books
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Authors</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/authors" className="btn btn-outline-primary">
              View Authors
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Genres</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/genres" className="btn btn-outline-primary">
              View Genres
            </Link>
          </div>
        </div>
      </div>
      <section className="p-3 mt-3">
        <h4>Due Books</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quidem.
        </p>
      </section>
    </div>
  );
  return (
    <>
      <MainLayout main={main} />
    </>
  );
};

export default Home;
