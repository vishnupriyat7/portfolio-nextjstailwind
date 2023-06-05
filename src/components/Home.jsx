import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="heme" className="h-screen
     w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'am a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of Experience as Computer Programmer. Entry Elevate
            Certified Full Stack Developer in MERN. I love to work on web
            application using technologies like React, Tailwind, nd and NextJS
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src="{HeroImage}" alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
