import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam
          architecto assumenda ab deleniti quos voluptatibus necessitatibus
          explicabo fuga quia? Ab totam, animi necessitatibus architecto
          deleniti earum magnam minus a.
        </p>


        <br />


        <p className="text-xl mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi
          itaque laborum reiciendis reprehenderit veritatis libero optio modi
          suscipit nihil. Quam odio, sint cupiditate doloribus voluptas
          mollitia, qui ratione eius sapiente nesciunt obcaecati, laudantium
          maxime quae voluptates magni suscipit aliquid dignissimos enim odit
          voluptatem et cum eum non dolorum? Placeat.
        </p>
      </div>
    </div>
  );
};

export default About;
