import React from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import profile from '../assets/profile-image.png';

const Home = () => {
  return (
    <div 
    name="home" 
    className="top-0 m-0 h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">I'm Full Stack Developer</h2>
                <p className="text-gray-400 py-4 max-w-md">
                    I have 1+ years of experience building and designing software.
                    Currently, I love to work on web applications using
                    technologies like 
                    React, Tailwind, Javaspringboot and MYSQL
                </p>
                <div>
                    <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio<span className="hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
                    </button>
                </div>
            </div>
            <div className="m-auto ">
                <img 
                    src={profile}
                    alt="profile here"
                    className="rounded-2xl mx-auto h-52 w-3/3 md:w-full "/>
            </div>
            
        </div>
    </div>
  )
}

export default Home