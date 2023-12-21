import React from 'react';

const Links = () => {



    const navLink = [
        {
            name: "Home",
            link: "#Home",
        },
        {
            name: "About",
            link: "#About",
        },
        {
            name: "Projets",
            link: "#Projets",
        },
        {
            name: "Portfolio",
            link: "#Portfolio",
        },
    //     // {
    //     //   name: "Contact",
    //     //   link: "/Contact",
    //     // },
    ];



    return (
        <>
            {navLink.map(({ link, name }) => (
                <li className="navli" key={name}>
                    <a href={link} className="link">{name}</a>
                </li>
            ))}
        </>
    );
}

export default Links;
