import React from "react";
import htmlimg from "../assets/html.png";
import cssimg from "../assets/css.png";
import jsimg from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import tailwindimg from "../assets/tailwind.png";
import nextimg from "../assets/nextjs.png";
import graphqlimg from "../assets/graphql.png";
import githubimg from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmlimg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssimg,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jsimg,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwindimg,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextimg,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphqlimg,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: githubimg,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
