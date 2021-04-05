import React, { useCallback, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import { getBooks } from "../../actions/books";
import { useDispatch } from "react-redux";
import BookList from "./booklist";

const Books = () => {
  const dispatch = useDispatch();

  const stableDispatch = useCallback(() => {
    dispatch(getBooks());
  }, [dispatch]);
  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);

  const main = <BookList />;

  return (
    <>
      <>
        <MainLayout>{main}</MainLayout>
      </>
    </>
  );
};

export default Books;
