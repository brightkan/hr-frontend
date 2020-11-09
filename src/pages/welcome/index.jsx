import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <center>
      <h1>Successfully Logged In :)</h1>
      <Link to="/login">
        <button>Log out</button>
      </Link>
    </center>
  );
};

export default Index;
