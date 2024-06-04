import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./slices/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              email: "testcreated@123.com",
              name: "testcreated",
              age: 25,
              location: "chennai",
            })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
