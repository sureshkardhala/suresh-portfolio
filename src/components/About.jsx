import { Fragment, useState } from "react";
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
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div 
    name="about"
    className="w-full h-fit  min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 md:p-16 ">
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
         <div>
         <p className="text-4xl font-bold inline border-b-4 border-gray-500">
             About
           </p>
         </div>
         <p className="text-xl mt-10">Suresh Kardhala</p>

         <p className="mt-4 text-gray-300">
         I am a highly motivated and enthusiastic professional with a strong passion for product development and digital technologies. Throughout my career, I have gained valuable experience and skills that make me a valuable asset in the field.
         </p>
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open}  />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="text-gray-400 font-light text-lg">
        Education
        </AccordionHeader>
        <AccordionBody className="text-gray-300">
          <li>I had completed graduation in Computer Science & Engineering with 8.32 CGPA at pragati engineering college affliated by JNTUK, Kakinada from 2018-2022</li>
          <li>Intermediate at Geetanjali Junior College Kakinada, with 907/1000 from 2016-2018</li>
          <li>10th Class at The Origin E.M School ,Vetlapalem with 9.0/10 in year 2016 </li>
         
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-gray-400 font-light text-lg">
          Internship Experience
        </AccordionHeader>
        <AccordionBody  className="text-gray-300">
        I completed a product development internship at Codetantra from July 2022 to September 2022. 
        During this period, I actively participated in the development of various projects, gaining hands-on experience in technologies such as HTML, Bootstrap, Javascript, Java, and MongoDB. 
        This internship allowed me to enhance my problem-solving abilities and develop a keen eye for detail while working in a team-oriented environment.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-gray-400 font-light text-lg">
        Professional Experience
        </AccordionHeader>
        <AccordionBody  className="text-gray-300">
        Currently, I am working as a Digital Specialist Engineer at Infosys since October 2022. 
         In this role, I have leveraged my strong foundation in React, Redux, Tailwind, MaterialUI Javaspringboot  and MySQL to contribute to the successful execution of multiple projects. I have played a vital role in developing and implementing innovative solutions while ensuring the
         highest standards of quality and performance.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="text-gray-400 font-light text-lg">
        Skills and Expertise
        </AccordionHeader>
        <AccordionBody  className="text-gray-300">
        With my proficiency in HTML, CSS, Javascript, React, Redux, Tailwind, MaterialUI, Java, Javaspringboot and MySQL, 
         I possess a solid technical foundation that allows me to tackle complex challenges efficiently. 
         I have developed a deep understanding of these technologies, enabling me to debug, test, and optimize code effectively. 
         Additionally, I possess excellent communication skills, which enable me to effectively collaborate with cross-functional teams and articulate technical concepts to non-technical stakeholders.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)} className="text-gray-400 font-light text-lg">
        Passion for Learning and Adaptability
        </AccordionHeader>
        <AccordionBody  className="text-gray-300">
        I am always eager to learn and take on new challenges. I thrive in dynamic and fast-paced environments, continuously expanding my knowledge base and staying up-to-date with the latest industry trends and advancements. 
        My ability to quickly adapt to new technologies and frameworks allows me to remain agile and deliver high-quality results.
        
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)} className="text-gray-400 font-light text-lg">
        Summary
        </AccordionHeader>
        <AccordionBody  className="text-gray-300">
        In summary, I am a dedicated and accomplished professional with a strong background in product development and digital technologies. 
         With my experience in my skills and combined with my excellent understanding ability and communication skills, 
          I am confident in my ability to contribute to the success of any project or team. I am excited about the opportunity to take on new challenges, further expand my skills, and deliver innovative solutions.      
        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>
    </div>
  );
}