import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
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
        <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed sm:mb-4">
            <div>
                <h3 className="lg:text-3xl font-signature ml-2 md:text-2xl sm:text-xl">Vishnu Priya T</h3>
            </div>

            <ul className="flex">
                {links.map(({ id, link }) =>
                    <li
                        key={id}
                        className="px-4 cursor-pointer font-medium capitalize text-gray-600 hover:scale-110 duration-200"
                    >
                       <Link to= {link} smooth duration={500} > {link}</Link>
                    </li>
                )}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="pr-4 cursor-pointer z-10 text-gray-500 md:hidden sm:hidden"
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
                          <Link onClick={()=> setNav(!nav)} to= {link} smooth duration={500} > {link}</Link>
                        </li>
                    )}
                </ul>}
        </div>
    );
};

export default NavBar;
