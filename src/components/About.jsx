import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function About() {
  const aboutIntro = useSelector((state) => state.portfolio.aboutIntro);
  const aboutDetails = useSelector((state) => state.portfolio.aboutDetails);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      name="about"
      className="w-full h-fit  min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 md:p-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">{aboutIntro.name}</p>
        <p className="mt-4 text-gray-300">{aboutIntro.description}</p>
        <Fragment>
          {aboutDetails?.map(({ id, name, description, edu, eduDetails }) => (
            <Accordion
              key={id}
              open={open === id}
              icon={<Icon id={id} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(id)}
                className="text-gray-400 font-light text-lg text-left"
              >
                {name}
              </AccordionHeader>
              <AccordionBody className="text-gray-300">
                {edu &&
                  eduDetails?.map(({ id, data }) => <li key={id}>{data}</li>)}
                {!edu && description}
              </AccordionBody>
            </Accordion>
          ))}
        </Fragment>
      </div>
    </div>
  );
}
