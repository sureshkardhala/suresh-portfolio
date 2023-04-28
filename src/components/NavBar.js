import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    
    const links = [
        {
            id:1,
            name: 'home'
        },
        {
            id:2,
            name: 'about'
        },
        {
            id:3,
            name: 'portfolio'
        },
        {
            id:4,
            name: 'experience'
        },
        {
            id:5,
            name: 'contact'
        }
    ];
  return (
    

    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4">
        <div>
            <h1 className="text-3xl font-signature ml-2">Suresh</h1>
        </div>
        <ul className="hidden md:flex ">
            {
                links.map(link =>
                    <li key={link.id} className="px-2 ml-4 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 duration-200  ">{link.name}</li>
                )
            }
        </ul>
        <div className="cursor-pointer pr-2 z-10 text-gray-500 md:hidden" onClick={()=> setNav(!nav)}>
            {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>
        {
            nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full  h-screen bg-gradient-to-b from-black to-gray-800 text-greay-500">
            {
                links.map(link =>
                    <li key={link.id} className="px-2  mt-10 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 duration-200  ">{link.name}</li>
                )
            }
            </ul>
        )}
    </div>
  )
}

export default NavBar