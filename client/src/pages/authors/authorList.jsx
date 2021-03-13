import React from "react";
import { useSelector } from "react-redux";
import AuthorListItem from "./authorListItem";

const AuthorList = () => {
  const authors = useSelector((state) => state.authors.authorList);
  if (authors === undefined) {
    return <h2>Loading</h2>;
  } else if (authors.length === 0) {
    return <h2 className="py-3">Sorry, no author existing. Add one now.</h2>;
  }
  const authorList = authors.map((author, indx) => (
    <AuthorListItem key={author._id} indx={++indx} author={author} />
  ));
  return <div>{authorList}</div>;
};

export default AuthorList;
