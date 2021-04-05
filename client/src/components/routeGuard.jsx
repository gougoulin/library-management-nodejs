import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";

const RouteGuard = ({ children, ...rest }) => {
  const token = useSelector((state) => state.users.token);
  const location = useLocation();

  let _children = token ? (
    children
  ) : (
    <Redirect to={{ pathname: "/login", state: { from: location } }} />
  );

  return (
    // <Route
    //   {...rest}
    //   render={({ props }) => {
    //     return token ? (
    //       children
    //     ) : (
    //       <Redirect to={{ pathname: "/login", state: { from: location } }} />
    //     );
    //   }}
    // />
    <Route {...rest}>{_children}</Route>
  );
};

export default RouteGuard;
