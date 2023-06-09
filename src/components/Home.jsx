import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import profile from "../assets/profile.jpg";

const Home = () => {

  return (
    <div
      name="home"
      className="min-h-screen h-fit w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-10 md:mt-32">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Full Stack Developer{" "}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1+ years of experience building and designing software.
            Currently, I am working at Infosys as Digital Specialist Engineer. I
            love to work on web applications using technologies like Java,
            Javaspringboot, Javascript, React, Tailwind, and MYSQL.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className=" mt-10 md:mt-32">
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl mx-auto sm:w-96 w-[350px] h-88"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
