import logo from "../assets/react.svg";
import Links from "./Links";
import { Link } from "react-router-dom";

const Nav = () => {


  [
    {
      name: "Contact",
      link: "/Contact",
    },
  ];
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <ul className="navul">
            <Links />
          </ul>
        </nav>
        <Link to="/Contact" className="contact">
          Contacter Moi
        </Link>
      </header>
    </>
  );
};

export default Nav;
