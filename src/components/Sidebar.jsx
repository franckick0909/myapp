import Links from "./Links";
import { Link } from "react-router-dom";
import { useState } from "react";


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const sidebar = isOpen ? "sidebar--open" : "sidebar--closed";

    return (
        <>
        <button onClick={toggle} className="sidebar__button">
            <span className="sidebar__button__bar"></span>
            <span className="sidebar__button__bar"></span>
            <span className="sidebar__button__bar"></span>
        </button>
        <ul className={sidebar}>
        <Link to="/Contact" className="contactPlus">
          Contacter Moi
        </Link>
            <Links />
        </ul>
        </>
    );
};

export default Sidebar;