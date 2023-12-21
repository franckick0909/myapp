import { Link } from "react-router-dom";
import React from 'react';

const Error404 = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Page not found</h2>

      <Link to="/">
        <p>Go back to the main page</p>
      </Link>
    </div>
  );
};

export default Error404;
