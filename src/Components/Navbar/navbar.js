import React, { useState } from 'react';
import {CgMenuRight} from "react-icons/cg"
import {PiSubtractSquareFill} from "react-icons/pi"
import {IoClose} from "react-icons/io5"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  
  console.log(isOpen)

  return (
    <nav className="bg-black z-[999] text-white top-0 w-full fixed">
      <div className="container mx-auto py-2">
        <div className="flex w-full z-50 justify-between">
          <a href="/" className="text-xl ml-3 font-bold no-underline flex">⁣<PiSubtractSquareFill className=''/></a>
          <button onClick={toggleMobileMenu} className="sm:hidden text-white focus:outline-none mr-3">
          <CgMenuRight className='w-[25px] h-[25px]'/></button>
          <div className='hidden font-semibold md:flex gap-7 mr-1'>
          <a href="#home" className=" hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Home</a>
          <a href="#about" className=" hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">About</a>
          <a href="#resume" className=" hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Resume</a>
          <a href="#project" className="hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Projects</a>
          <a href="#myblog" className="hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">My Blog</a>
          <a href="#contact" className="hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Contacts</a>
          </div>
        </div>
        <div className={isOpen ? "bg-zinc-950 fixed top-0 left-0 z-30 w-[70%] h-full transition-all duration-700 " : "fixed top-0 -left-full w-[80%] h-full transition-all duration-700 "}>
          <div className='flex mt-2  p-1 justify-end items-end'>
          <button onClick={toggleMobileMenu} className="sm:hidden text-white focus:outline-none mr-3">
          <IoClose/></button>
          </div>
        <div className='font-semibold flex flex-col gap-3 m-5 '>
          <a href="#home" className=" hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Home</a>
          <a href="#about" className=" hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">About</a>
          <a href="#resume" className=" hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Resume</a>
          <a href="#project" className="hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Projects</a>
          <a href="#myblog" className="hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">My Blog</a>
          <a href="#contact" className="hover:text-yellow-400 hover:border-b-4 hover:border-b-yellow-400">Contacts</a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
