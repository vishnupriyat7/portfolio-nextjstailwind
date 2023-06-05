import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
            <div>
                <h1 className="text-5xl font-signature ml-2">Vishnu Priya T</h1>
            </div>

            <ul className="flex">
                {links.map(({ id, link }) =>
                    <li
                        key={id}
                        className="px-4 cursor-pointer font-medium capitalize text-gray-600 hover:scale-110 duration-200"
                    >
                        {link}
                    </li>
                )}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="pr-4 cursor-pointer z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500">
                    {links.map(({ id, link }) =>
                        <li
                            key={id}
                            className="px-4 cursor-pointer py-4 capitalize text-4lx"
                        >
                            {link}
                        </li>
                    )}
                </ul>}
        </div>
    );
};

export default NavBar;