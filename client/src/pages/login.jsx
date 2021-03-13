import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToken } from "../actions/users";

const Login = () => {
  const initialState = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    err: "",
  };
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (eve) => {
    try {
      eve.preventDefault();
      console.log("to submit", {
        email: state.email.value,
        password: state.password.value,
      });
      const url = "http://localhost:5000/users/login";
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.email.value,
          password: state.password.value,
        }),
      });
      switch (resp.status) {
        case 200:
          const data = await resp.json();
          console.log("get token", data.token);
          dispatch(setToken(data.token));
          history.push("/");
          break;
        case 401:
          setState({
            ...state,
            err: "Wrong password",
          });
          break;
        case 404:
          setState({
            ...state,
            err: "Unregistered email",
          });
          break;
        case 505:
          setState({
            ...state,
            err: "Server error",
          });
          break;
        default:
          break;
      }
    } catch (error) {
      setState({
        ...state,
        err: error.message,
      });
    }
  };
  const handleChange = (eve, field) => {
    let copyState = { ...state };
    copyState[field].value = eve.target.value;
    console.log("copystate", copyState);
    setState(copyState);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 class="text-center mt-5">LOG IN</h2>
          <div className="text-danger">{state.err}</div>
          <form onSubmit={handleSubmit} className="form w-25 mt-3 mx-auto">
            <div className="mb-3">
              <label htmlFor="email" className="form-text">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="form-control"
                type="text"
                onChange={(eve) => {
                  handleChange(eve, "email");
                }}
                value={state.email.value}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-text">
                Password
              </label>
              <input
                id="password"
                name="password"
                className="form-control"
                type="text"
                onChange={(eve) => {
                  handleChange(eve, "password");
                }}
                value={state.password.value}
              />
            </div>
            <button className="btn btn-primary">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
