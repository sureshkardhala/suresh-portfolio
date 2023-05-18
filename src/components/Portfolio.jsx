import React from 'react';
import erpImg from "../assets/erp.jpg";
import foodyImg from "../assets/foody.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import shoppingcartImg from "../assets/shoppingcart.jpg";
import udyogashalaImg from "../assets/udyogashala.png";
import usertoggleImg  from "../assets/usertoggle.png";
import nodeapiImg from "../assets/nodeapi.png";
import  autosaveImg from "../assets/autosave.png";
import otherImg from "../assets/other.png";
import Project from './Project';
import PopMsg from './PopMsg';
import egovImg from "../assets/egovernment.png";
import tjvImg from "../assets/tjv.png";
import countertoolkit from "../assets/conutertoolkit.png";



const Portfolio = () => {


  const portfolios = [
    {
      id: 1,
      image: erpImg,
      name: "ERP WebApplication - Infosys",
      personalProject: false,
      style: "shadow-white",
      about: [
        {id:1, data: "Role : FullStack Developer"},
        {id:2, data:"Technolgies Used: React, JavaSpringboot, HTML, CSS & Bootstrap"},
        {id: 3, data: "Team Size: 3"},
        {id:4, data: "Duration: 24/01/2023 - till now (Infosys)"},
        {id:5, data:"Javaspringboot used as a backend"},
        {id:6, data: "Developing user interactive UI with fully functional state management"},
        {id: 7,data: "Used axios to communicate with backend services"},
        {id: 8, data: " Designed the Web page using Bootstrap, css and html"},
        {id: 9, data: "JPA Respository is used to perform operations from database"},
        {id:10, data: "Having a understanding the client requirements and developing, debugging"},
        {id:11, data: "Using Hooks concepts for better statemanagement & developing business logics in service layer."}
      ],
      containerStyle : " h-fit ",
      others:false,
      images:[],


    },
    {
      id: 2,
      image: foodyImg,
      name: "Food delivery Application",
      personalProject: true,
      style: "shadow-sky-300",
      github: "https://github.com/sureshkardhala/foody",
      about: [
        {id:1, data: "Role : FullStack Developer"},
        {id:2, data:"Technolgies Used: React, Redux, Tailwind, Material UI, Toast Javaspringboot & MYSQL"},
        {id: 3, data: "Team Size: 1"},
        {id:4, data: "Duration: 20/04/2023 - till now"},
        {id:5, data:"Food deleviry application with features that we have seen in other food develivery apps"},
        {id:6, data: "Developing interactive and responsive UI using JSX & Tailwind CSS"},
        {id:7, data: "Javaspringboot is used for backend"},
        {id:8, data: "Developed interactive and secured login & registration forms"},
        {id: 9,data: "Used axios to communicate with backend services"},
        {id: 10, data: "Developing Interactive UI to suitable  using Tailwind css"},
        {id: 11, data: "JPA Respository is used to perform operations from database"},
        {id:12, data: "Creating a store, updating state and complete statemanagement using redux tool kit"},
        {id:13, data: "Getting all the products, add item into cart , remove itemfrom cart and calculating billing based no.of products in cart."},
        {id:14, data:"ReactHookForms, useRef, useState, useEffect hooks are used"}
      ],
      containerStyle : " h-fit ",
      others:false,
      images:[],
    },
    {
      id: 3,
      image: portfolioImg,
      name:"Protfolio Web application",
      personalProject: true,
      style: "shadow-sky-300",
      github: "https://github.com/sureshkardhala/shopping-cart",
      about: [
        {id:1, data: "Role : React Developer"},
        {id:2, data:"Technolgies Used: React, Tailwind CSS, Material UI"},
        {id: 3, data: "Team Size: 1"},
        {id:4, data: "Duration: 10 days"},
        {id:5, data: "Developing user interactive UI using react, tailwind & material UI"},
        {id:6, data: "Developed portfolio to showcase my skills & projects"},
        {id:7, data:"Deployed in netlify"}
      ],
      containerStyle : " min-h-screen ",
      others:false,
      images:[],


    },

    {
      id: 4,
      image: autosaveImg,
      name:"AutoSaving System - CodeTantra",
      personalProject: false,
      style: "shadow-blue-400",
      about: [
        {id:1, data: "Role : FullStack Developer"},
        {id:2, data:"Technolgies Used: Sveletejs, Java & MongoDB"},
        {id:4, data: "Duration: 30 days"},
        {id:5, data:"Feature to save corrections and marks automatically for every 30 seconds"},
        {id:6, data: "When a correction has started timer get started and save it for every 30 seconds"},
        {id:7, data: "Java is used for backend and svelte.js as frontend"},
        {id:8, data: "To avoid multiple calls and to reduce duplicate data we used algorithm for distributed system"},
        {id:9, data: "Vector clock distributed algorithm used to handle duplicated and collision of api calls by giving counter"},
        {id:10, data:"If two api call data having same count number it will take latest one . send it back and retry the otherone"}
      ],
      containerStyle : " min-h-screen ",
      others:false,
      images:[],



    },
    {
      id: 5,
      image: usertoggleImg,
      name:"Useraccess control system - CodeTantra",
      personalProject: false,
      style: "shadow-yellow-400",
      about: [
        {id:1, data: "Role : FullStack Developer"},
        {id:2, data:"Technolgies Used: HTML, Javascript, BootStrap, Java"},
        {id:4, data: "Duration: 12days"},
        {id:5, data:"Feature to give access to basic admin and restrict the other users like students to join meeting directly"},
        {id:6, data: "Developed a toggle button to control the users. This toggle only visible to admin."},
        {id:7, data: "If toggle is enabled all users can join meeting."},
        {id:8, data: "If toggle is disabled only basic admin can join in meeting"},
        {id:9, data: "Toggle created using html, bootstrap. Events are handled and api connected (AJAX) by javascript"},
        {id:10, data:"Java used to check basic admin or student from rest api"}
      ],
      containerStyle : " min-h-screen ",
      others:false,
      images:[],


    },
    
    {
      id: 6,
      image: shoppingcartImg,
      name: "Shopping cart",
      personalProject: true,
      style: "shadow-purple-400",
      github: "https://github.com/sureshkardhala/shopping-cart",
      about: [
        {id:1, data: "Role : FullStack Developer"},
        {id:2, data:"Technolgies Used: React, Redux, Material UI & Firebase"},
        {id: 3, data: "Team Size: 1"},
        {id:4, data: "Project Duration: 01/04/2023 - 20/04/2023"},
        {id:5, data:"Simple shopping application with features of showing all products adding item into cart & remove item etc..."},
        {id:6, data: "Developing interactive and responsive UI using JSX & CSS"},
        {id: 7,data: "Used axios to communicate with firebase"},
        {id: 8, data: "Firebase is used to perform operations from database"},
        {id:9 , data: "Creating a store, updating state and complete statemanagement using redux tool kit"},
        {id:10, data: "Getting all the products, add item into cart , remove itemfrom cart and calculating billing based no.of products in cart."},
        {id:11, data:"useRef, useState, useEffect hooks are used"}
      ],
      containerStyle : " h-fit ",
      others:false,
      images:[],



    },
    {
      id: 7,
      image: udyogashalaImg,
      name: "Udyogashala - Jobportal",
      personalProject: true,
      style: "shadow-sky-300",
      github: "https://udyogashala.com",
      about: [
        {id:1, data:"Technolgies Used: HTML, CSS, Javascript, PHP & Mysql "},
        {id:2, data: "Role : FullStack Developer"},
        {id: 3, data: "Duration: 3 Months"},
        {id:4, data:"Offcampus jobportal where we can access all the jobs uploaded by admin & read the description"},
        {id:5, data:"We can apply for the job by clicking on `apply` button"},
        {id:6, data:"Developed well secured loginsystem for admin."},
        {id:7, data: "Developed admin dashboard to upload , update & delete the jobs"},
        {id:8, data: "HTML, CSS, JS used as frontend techstack"},
        {id:9, data:"PHP used as backend & Mysql for a database"}
      ],
      containerStyle : " min-h-screen ",
      others:false,
      images:[],


    },
    {
      id: 8,
      image: nodeapiImg,
      name:"Restful API using Node.js & MYSQL",
      personalProject: true,
      style: "shadow-red-300",
      github: "https://github.com/sureshkardhala/Automatic-E-Government-Services-using-AI",
      about: [
        {id:1, data:"Technolgies Used: Flutter, Nodejs & MYSQL"},
        {id:2, data: "Role : Backend Developer"},
        {id: 3, data: "Duration: 2 Months"},
        {id:4, data:" Developed a mini web application to store the students data and helps to oraganize the events"},
        {id:5, data:"When an event is created it will get notified by students in college"},
        {id:6, data:"Flutter used as a frontend"},
        {id:7, data: "Node.js for a backend and mysql for database"},
        {id:8, data: "Created a restful api to perform all the crud opertaions"},
        {id:9, data:"have created api for upload an event, update and delete events"}
      ],
      containerStyle : " min-h-screen ",
      others:false,
      images:[],

    },
    {
      id: 9,
      image: otherImg,
      name:"Other Projects",
      personalProject: true,
      style: "shadow-green-300",
      github: "https://github.com/sureshkardhala/",
      about: [
        {
          id:1, 
          name: "Automatic E-Government Services usingAI", 
          image:egovImg, 
          tech:"Python, Machine Learning, Tinkter",
          description: "Automatic E-Goverment System is developed using Python, Machine Learning. We have developed an machine learning modal to evaluate all the goverment servives to evaluate automatically based on previous data. So it helps to save time and man power", 
          github:"https://github.com/sureshkardhala/Automatic-E-Government-Services-using-AI"
        },
        {
          id:2, 
          name: "Telangana JanaVedika", 
          image:tjvImg, 
          tech:"HTML, CSS, Javascript, Jquery, PHP & MYSQL",
          description: "TJV Webapplication is developed using above techstack. It developed for publishing research papers, updating and create an organizational event. Contains well secured loginsystem and reactive and responsive userinterface using jquery and javascript. PHP used for backend and MYSQL used for database", 
          github:"https://github.com/sureshkardhala/tjv"

        },
        {
          id:3, 
          name: "React counter web application using reduxtoolkit", 
          image:countertoolkit, 
          tech:"React, Redux",
          description: "A simple web applictaion contains two buttons increment and decrement. Based on increment and decrement value will be update in counter. Developed using useState Hook and redux used in react", 
          github:"https://github.com/sureshkardhala/react-reduxtoolkit-counter"
        },
        {
          id:4, 
          name: "React counter web application", 
          image:countertoolkit, 
          tech:"React, Redux, ReduxToolKit",
          description: "A simple web applictaion contains two buttons increment and decrement. Based on increment and decrement value will be update in counter. Developed using useState Hook and redux toolkit used in react", 
          github:"https://github.com/sureshkardhala/react-redux-counter"
        },
      ],
      containerStyle : " h-fit p-2 ",
      others:true,
      images:[],

    },
    
  ];
  return (
    <div
      name="portfolio"
      className="w-full  min-h-screen h-fit bg-gradient-to-b from-black to-gray-800  text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 px-0">
          {portfolios.map(({ id, image , name, style, personalProject, github,  about, containerStyle, others, images}) => (
            <div key={id} className={"w-full shadow-md shadow-gray-600 rounded-lg " + style}>
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 w-[320px] mx-auto h-[180px] hover:scale-105  "
              />
              <div className="flex flex-col items-center justify-center px-4 py-2 mt-4">
                <div className="w-full truncate">
                  {name}
                </div>
                 <div className="w-full flex flex-row justify-between space-x-16 ">
                  <Project about={about} style={containerStyle} name={name} others={others} images={images}/>
                {personalProject &&<a 
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500  hover:bg-gradient-to-r hover:from-cyan-500 hover:to-red-500 cursor-pointer duration-200 hover:scale-110 ">
                  Code
                </a>

}
{
  !personalProject &&  <PopMsg />}
 

                </div>

                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
