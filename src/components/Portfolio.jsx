import React from "react";
import anycountry from "../assets/portfolio/anycountry.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import digitgardn from "../assets/portfolio/digitgardn.jpg";
import klibf from "../assets/portfolio/klibf.png";
import frontendtechnologies from "../assets/portfolio/frontendtechnologies.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: klibf,
      href:"https://klibf.niyamasabha.org/"
      
    },
    {
      id: 2,
      src: digitgardn,
      href: "https://digitalgarden.niyamasabha.org/",
     
    },
    {
      id: 3,
      src: anycountry,
      href: "https://vishnupriyat7.github.io/AnycountryDetails/",
      code: "https://github.com/vishnupriyat7/AnycountryDetails"
      
    },
    {
      id: 4,
      src: navbar,
     
      
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 1,
      src: frontendtechnologies,
      href: "https://vishnupriyat7.github.io/bootstrap_sample_front_end_technologies/",
      code: "https://github.com/vishnupriyat7/bootstrap_sample_front_end_technologies"
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src,href,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
               
                <button className="w-1/2 px-4 py-2 m-3 hover:scale-110 rounded-md duration-200 bg-gradient-to-b from-cyan-500 to-blue-500" >
                <a href={href} >Demo  </a>
                </button>
              
                
                <button className="w-1/2 px-4 py-2 m-3 hover:scale-110 rounded-md duration-200 bg-gradient-to-b from-cyan-500 to-blue-500">
                <a href={code} > Code</a>
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
