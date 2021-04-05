import React from "react";
import Loading from "../../components/loading";
import LoadingFail from "../../components/loadingFail";
import { useSelector } from "react-redux";
import BookInstanceListItem from "./bookInstanceListItem";
import BookInstanceListHeader from "./listHeader";

const BookInstanceList = () => {
  const bookInstances = useSelector((state) => state.bookInstances);

  let bookInstanceList = null;
  switch (bookInstances.loading) {
    case "start":
      bookInstanceList = <Loading />;
      break;
    case "success":
      if (bookInstances.bookInstanceList.length === 0) {
        bookInstanceList = (
          <h2 className="text-info py-3">No book Instances in the library.</h2>
        );
      } else {
        bookInstanceList = bookInstances.bookInstanceList.map(
          (bookInstance, indx) => {
            return (
              <BookInstanceListItem
                key={indx}
                indx={indx}
                bookInstance={bookInstance}
              />
            );
          }
        );
      }
      break;
    case "fail":
      bookInstanceList = <LoadingFail />;
      break;
    default:
      bookInstanceList = (
        <h2 className="text-danger">Unexpected errors occurs.</h2>
      );
      break;
  }

  return (
    <>
      <BookInstanceListHeader />
      {bookInstanceList}
    </>
  );
};

export default BookInstanceList;
