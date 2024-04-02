import { NavLink } from "react-router-dom";

const Links = () => {
  // const navLink = [
  //   {
  //     name: "Hero",
  //     link: "/Hero",
  //   },
  //   {
  //     name: "About",
  //     link: "/About",
  //   },
  //   {
  //     name: "Produits",
  //     link: "/Produits",
  //   },
  //   {
  //     name: "Services",
  //     link: "/Services",
  //   },
  //   {
  //     name: "Contact",
  //     link: "/Contact",
  //   },
  // ];


  return (
    <>
      <div className="link">
        <NavLink to="/Home" activeClassName="active" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Hero
        </NavLink>

        <NavLink to="/About" activeClassName="active" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          About
        </NavLink>

        <NavLink to="/Produits" activeClassName="active" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Produits
        </NavLink>

        <NavLink to="/Services" activeClassName="active" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Services
        </NavLink>

        <NavLink to="/Contact" activeClassName="active" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Links;
