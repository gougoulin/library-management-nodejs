import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const RouteGuard = ({ children, ...rest }) => {
  const token = useSelector((state) => state.users.token);
  return (
    <Route
      exact
      {...rest}
      render={({ location }) => {
        return token ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default RouteGuard;
