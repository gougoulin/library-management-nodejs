import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const MainLayout = ({ main }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">{main}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
