import React, { useCallback, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import { useDispatch } from "react-redux";
import BookInstanceList from "./bookinstancelist";
import { getBookInstances } from "../../actions/bookInstanceAction";

const BookInstance = () => {
  const dispatch = useDispatch();

  const stableDispatch = useCallback(() => {
    dispatch(getBookInstances());
  }, [dispatch]);
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);

  const main = <BookInstanceList />;

  return (
    <>
      <>
        <MainLayout>{main}</MainLayout>
      </>
    </>
  );
};

export default BookInstance;
