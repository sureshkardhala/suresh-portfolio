import React from "react";
import { useSelector } from "react-redux";

const Experience = () => {
  const mySkills = useSelector((state) => state.portfolio.mySkills);
  console.log(mySkills);
  const color = [" shadow-orange-500", " shadow-blue-400", " shadow-yellow-500", " shadow-sky-400",  " shadow-sky-800",  " shadow-orange-800",  " shadow-green-400",  " shadow-violet-400",  " shadow-sky-400", " shadow-gray-300",  " shadow-sky-400",]

  return (
    <div
      name="experience"
      className="h-fit min-h-screen bg-gradient-to-b from-gray-800 to-black w-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {mySkills?.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-300 " +  color[id-1]}
            >
              <img src={src} alt="" className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
