import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Error404 = () => {

  return (
    <section className="error">
      <Nav />

      <h1>404</h1>
      <h2>Page not found</h2>

      <Link to="/">
        <p>Go back to the main page</p>
      </Link>
    </section>
  );
};

export default Error404;
