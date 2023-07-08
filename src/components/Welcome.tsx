import React from "react";
import UserService from "../services/UserService";

const Welcome = () => {
  return (
    <>
      <div className="container text-center mt-4">
        <h1>Welcome back {UserService.getUsername()}</h1>
        <button className="btn btn-outline-success btn-sm" onClick={() => UserService.dologout()}>Logout</button>
      </div>
    </>
  );
};

export default Welcome;
