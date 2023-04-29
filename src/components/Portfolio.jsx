import React from 'react';
import Es6 from '../assets/ES6.png';
import Forcast from '../assets/Forcast.png';
import Nodeinstall from '../assets/Nodeinstall.jpg';
import Reactsmooth from '../assets/Reactsmooth.jpg';
import Reactparllex from '../assets/Reactparallex.jpg';
import ResponsiveNav from '../assets/Responisvenav.png';

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            image:Es6
        },
        {
            id:2,
            image:Forcast
        },
        {
            id:3,
            image:Nodeinstall
        },
        {
            id:4,
            image:Reactsmooth
        },
        {
            id:5,
            image:Reactparllex
        },
        {
            id:6,
            image:ResponsiveNav
        }
    ]
  return (
    <div 
    name="portfolio"
    className="w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit md:h-full ">
           <div className="pb-8 mt-52">
            <p className="text-4xl font-bold inline border-b-4 cursor-pointer border-gray-500 hover:border-red-300 duration-300">
                Portfolio
            </p>
            <p className="py-4">Checkout my work here!.</p>
           </div>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolios.map(({id, image}) => 
                <div className="shadow-md shadow-gray-600 rounded-lg" key={id}>
                    <img src={image} alt="item here"
                    className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                    <button className="text-white w-fit px-6 py-2 my-2 mx-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-red-500 cursor-pointer duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 ">Demo</button>
                    <button className="text-white w-fit px-6 py-2 my-2 mx-4  flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500 cursor-pointer duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-red-500">Code</button>
                </div>
                </div>
                )}
            
           </div>
        </div>
    </div>
  )
}

export default Portfolio