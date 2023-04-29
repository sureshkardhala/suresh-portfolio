import React from 'react';
import{FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={25}/>
                </>
            ),
            href:'https://linkedin.com',
            style: "rounded-br-md"
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={25}/>
                </>
            ),
            href:'https://github.com/sureshkardhala',
            style: "rounded-br-md"
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail  size={25}/>
                </>
            ),
            href:'mailto:sureshkardhala2k22@gmail.com',
        },
        {
            id:4,
            child: (
                <>
                Resume <BsPersonLinesFill size={25}/>
                </>
            ),
            href:'./resume.pdf',
            download:true,
            style: 'rounded-br-md'
        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[45%] left-0 fixed">
        <ul >
            {
                links.map( ({id, child, href, download, style}) =>
                    <li key={id} className={"flex  items-center w-40 h-14 px-4  ml-[-110px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500"}>
                    <a 
                        href={href}
                        className="flex justify-between items-center w-full text-white "
                        target='_blank'
                        rel='noreferrer'>
                        {child}
                        {download}
                        
                    </a>
                </li>
                )}

           
          
        </ul>
    </div>
  )
}

export default SocialLinks