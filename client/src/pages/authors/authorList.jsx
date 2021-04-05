import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import LoadingFail from "../../components/loadingFail";
import AuthorListItem from "./authorListItem";

const AuthorList = () => {
  const authors = useSelector((state) => state.authors);

  // switch between loading, fail, and actual content
  let authorList = null;
  switch (authors.loading) {
    case "start":
      authorList = <Loading />;
      break;
    case "success":
      if (authors.authorList.length === 0) {
        authorList = (
          <h2 className="text-info py-3">No authors in the library.</h2>
        );
      } else {
        authorList = authors.authorList.map((author, indx) => (
          <AuthorListItem key={author._id} indx={++indx} author={author} />
        ));
      }
      break;
    case "fail":
      authorList = <LoadingFail msg={authors.loadingError} />;
      break;
    default:
      authorList = <h2 className="text-danger">Unexpected errors occurs.</h2>;
      break;
  }

  // if (authors === undefined) {
  //   return <h2>Loading</h2>;
  // } else if (authors.length === 0) {
  //   return <h2 className="py-3">Sorry, no author existing. Add one now.</h2>;
  // }
  // console.log(authors);

  // let authorList = authors.map((author, indx) => (
  //   <AuthorListItem key={author._id} indx={++indx} author={author} />
  // ));
  return <div>{authorList}</div>;
};

export default AuthorList;
