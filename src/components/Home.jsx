import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="heme" className="h-screen
     w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div>
          <h2>I'am a Full Stack Developer</h2>
          <p>
            I have 3 years of Experience as Computer Programmer. Entry Elevate
            Certified Full Stack Developer in MERN. I love to work on web
            application using technologies like React, Tailwind, nd and NextJS
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
