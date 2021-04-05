import React, { useEffect, useState } from "react";
import MainLayout from "../components/mainLayout";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardStart } from "../actions/dashboard";

const Home = () => {
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardStart());
  }, []);

  const mainContent = dashboard.loading ? (
    <Loading />
  ) : (
    <div>
      <h2 className="pt-3">Local Library Management </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        temporibus eius dolorem a labore unde sapiente asperiores quos officiis
        culpa!
      </p>
      <h3 className="pt-3">Summary of the library</h3>
      <p>
        <strong>Books: </strong> {dashboard.books || 0}
      </p>
      <p>
        <strong>Book copies: </strong> {dashboard.copies}
      </p>
      <p>
        <strong>Book copies available: </strong> {dashboard.availableCopies}
      </p>
      <p>
        <strong>Authors: </strong> {dashboard.authors || 0}
      </p>
      <p>
        <strong>Genres: </strong> {dashboard.genres || 0}
      </p>
      {/* <div className="d-flex justify-content-evenly">
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">BOOKs</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
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
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
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
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
        quidem.
      </p>
    </section> */}
    </div>
  );
  return (
    <>
      <MainLayout>{mainContent}</MainLayout>
    </>
  );
};

export default Home;
