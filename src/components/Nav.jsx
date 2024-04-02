import logo from "../assets/react.svg";
import Links from "./Links";

const Nav = () => {


  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
          
          <Links />

      </header>
    </>
  );
};

export default Nav;
